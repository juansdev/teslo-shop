"use client";

import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import {CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData} from "@paypal/paypal-js";
import {paypalCheckPayment, setTransactionById} from "@/actions";

interface IPayPalButtonProps {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({orderId, amount}: IPayPalButtonProps) => {
  const [{isPending}] = usePayPalScriptReducer();

  const roundedAmount = (Math.round(amount * 100)) / 100;

  if (isPending) return (
    <div className={"animate-pulse mb-16"}>
      <div className={"h-11 bg-gray-300 rounded"}/>
      <div className={"h-11 bg-gray-300 rounded mt-2"}/>
    </div>
  );

  const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
    const transactionId = await actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            value: roundedAmount.toString(),
            currency_code: "USD"
          }
        }
      ]
    });

    const {ok} = await setTransactionById(transactionId, orderId);
    if (!ok) throw new Error("It can not update the order.");

    return transactionId;

  }

  const onApprove = async (data: OnApproveData, actions: OnApproveActions): Promise<void> => {
    const details = await actions.order?.capture();
    if (!details || !details.id) return;

    await paypalCheckPayment(details.id);
  }

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
    />
  );
}