"use server";

import {IPaypalOrderStatusResponse} from "@/interfaces";
import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export const paypalCheckPayment = async (paypalTransactionId: string) => {
  const authToken = await getPayPalBearerToken();
  if (!authToken) return {
    ok: false,
    message: "It could not get the verify token."
  }

  const resp = await verifyIfPayPalPayment(paypalTransactionId, authToken);
  if (!resp) return {
    ok: false,
    message: "Error in the verify of the payment."
  }
  const {status, purchase_units} = resp;
  const {invoice_id: orderId} = purchase_units[0];

  if (status !== "COMPLETED") return {
    ok: false,
    message: "Have not payment yet."
  }

  try {
    await prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        isPaid: true,
        paidAt: new Date()
      }
    });
    revalidatePath(`/orders/${orderId}`);
    return {
      ok: true
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "500 - The payment could not done."
    }
  }

}

const getPayPalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
  const oAuth2Url = process.env.PAYPAL_OAUTH_URL ?? "";

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`, "utf-8"
  ).toString("base64");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Basic ${base64Token}`);

  const urlEncoded = new URLSearchParams();
  urlEncoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlEncoded
  }

  try {
    return await fetch(oAuth2Url, {...requestOptions, cache: "no-store"})
      .then(response => response.json()).then(r => r.access_token);
  } catch (error) {
    console.log(error);
    return null;
  }
}

const verifyIfPayPalPayment = async (paypalTransactionId: string, bearerToken: string): Promise<IPaypalOrderStatusResponse | null> => {
  const paypalOrderUrl = process.env.PAYPAL_ORDERS_URL ?? "";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };

  try {
    return await fetch(`${paypalOrderUrl}/${paypalTransactionId}`, {
      ...requestOptions,
      cache: "no-store"
    }).then((response) => response.json());
  } catch (error) {
    console.log(error);
    return null;
  }
}