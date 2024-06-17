"use client";

import {SessionProvider} from "next-auth/react";
import {ReactNode} from "react";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

interface IProviderProps {
  children: ReactNode;
}

export const Providers = ({children}: IProviderProps) => {
  return (
    <>
      <PayPalScriptProvider options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
        intent: "capture",
        currency: "USD"
      }}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </PayPalScriptProvider>
    </>
  );
}