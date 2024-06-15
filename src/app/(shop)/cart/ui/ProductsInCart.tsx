"use client";

import Image from "next/image";
import {QuantitySelector} from "@/components";
import {useCartStore} from "@/store";
import {useEffect, useState} from "react";
import Link from "next/link";

export const ProductsInCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const productsInCart = useCartStore(state => state.cart);
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProduct = useCartStore(state => state.removeProduct);
  useEffect(() => {
    setIsLoading(false);
  }, []);
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
              <Link className={"hover:underline cursor-pointer"} href={`/product/${product.slug}`}>
                <p>{product.size} - {product.title}</p>
              </Link>
              <p>${product.price}</p>
              <QuantitySelector quantity={product.quantity}
                                onQuantityChanged={(action) => updateProductQuantity(product, action.value)}/>
              <button className={"underline mt-3"} onClick={() => removeProduct(product)}>
                Remove
              </button>
            </div>
          </div>
        ))
      }
    </>
  );
}