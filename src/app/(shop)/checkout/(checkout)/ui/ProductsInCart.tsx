"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {useCartStore} from "@/store";
import {currencyFormat} from "@/utils";
import {useRouter} from "next/navigation";

export const ProductsInCart = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const productsInCart = useCartStore(state => state.cart);
  useEffect(() => {
    if (!productsInCart.length) router.replace("/");
    setIsLoading(false);
  }, [productsInCart.length, router]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {
        productsInCart.map(product => (
          <div key={`${product.slug}-${product.size}`} className={"flex mb-5"}>
            <Image
              src={`/products/${product.image}`}
              width={100}
              height={100}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px"
              }}
              className={"mr-5"}/>
            <div>
              <span>
                {product.size} - {product.title} ({product.quantity})
              </span>
              <p className={"font-bold"}>{currencyFormat(product.price * product.quantity)}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}