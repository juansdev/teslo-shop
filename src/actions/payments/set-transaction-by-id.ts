"use server";

import prisma from "@/lib/prisma";

export const setTransactionById = async (transactionId: string, orderId: string) => {
  try {
    const result = await prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        transactionId
      }
    });
    if (result) return {
      ok: true,
      message: "Order updated successfully"
    }
    return {
      ok: false,
      message: "Order not found"
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Order could not updated"
    }
  }
}