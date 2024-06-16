"use client";

import {useEffect, useState} from "react";
import {useAddressStore, useCartStore} from "@/store";
import {currencyFormat} from "@/utils";
import clsx from "clsx";
import {placeOrder} from "@/actions";
import {useRouter} from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const textTermsAndConditions = `
    <span class="text-xs text-black">
      By clicking &quot;Place Order&quot; you agree to our
      <a href="" class="underline">
        Terms and Conditions
      </a>
      and 
      <a href="" class="underline text-black">
        Privacy Policy
      </a>
    </span>
  `;
  const address = useAddressStore(state => state.address);
  const {itemsInCart, subTotal, tax, total} = useCartStore(state => state.getSummaryInformation());
  const cart = useCartStore(state => state.cart);
  const clearCart = useCartStore(state => state.clearCart);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);

    const productsToOrder = cart.map(product => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size
    }));

    const response = await placeOrder(productsToOrder, address);
    if (!response.ok) {
      setIsPlacingOrder(false);
      setErrorMessage(response.message);
      return;
    }
    clearCart();
    router.replace(`/orders/${response.order}`);
  }
  if (isLoading) return (<p>Loading...</p>);
  return (
    <div className={"bg-white rounded-xl shadow-xl p-7"}>
      <h2 className={"text-2xl mb-2 text-black"}>Delivery Address</h2>
      <div className={"mb-10 text-black"}>
        <p className={"text-xl"}>
          {address.firstName} {address.lastName}
        </p>
        <p className={"font-bold"}>
          {address.address}
        </p>
        {
          address.optionalAddress && <p>{address.optionalAddress}</p>
        }
        <p>ZC {address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>
          {address.phone}
        </p>
      </div>
      <div className={"w-full h-0.5 rounded bg-gray-200 mb-10"}/>
      <h2 className={"text-2xl mb-2 text-black"}>Resume of order</h2>
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

      <div className={"mt-5 mb-2 w-full"}>
        <p className={"mb-5"} dangerouslySetInnerHTML={{__html: textTermsAndConditions}}></p>
        {errorMessage && <p className={"text-red-500"}>{errorMessage}</p>}
        <button onClick={onPlaceOrder} className={
          clsx({
            "btn-primary": !isPlacingOrder,
            "btn-disabled": isPlacingOrder
          })
        }>
          Place Order
        </button>
      </div>

    </div>
  );
}