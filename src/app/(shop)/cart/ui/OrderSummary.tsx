"use client";
import {useEffect, useState} from "react";
import {useCartStore} from "@/store";
import {currencyFormat} from "@/utils";

export default function OrderSummary() {
  const [isLoading, setIsLoading] = useState(true);
  const {itemsInCart, subTotal, tax, total} = useCartStore(state => state.getSummaryInformation());
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={"grid grid-cols-2"}>
      <span className={"text-black"}>
        No. Products
      </span>
      <span className={"text-black text-right"}>
        {`${itemsInCart} ${itemsInCart === 1 ? `articles` : `article`}`}
      </span>

      <span className={"text-black"}>
        SubTotal
      </span>
      <span className={"text-black text-right"}>
        {currencyFormat(subTotal)}
      </span>

      <span className={"text-black"}>
        Taxes (15%)
      </span>
      <span className={"text-black text-right"}>
        {currencyFormat(tax)}
      </span>

      <span className={"mt-5 text-2xl text-black"}>
        Total
      </span>
      <span className={"mt-5 text-2xl text-black text-right"}>
        {currencyFormat(total)}
      </span>
    </div>
  );
}