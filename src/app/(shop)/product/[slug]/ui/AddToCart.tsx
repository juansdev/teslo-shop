"use client";

import {QuantitySelector, SizeSelector} from "@/components";
import {ICartProduct, IProduct, ISize} from "@/interfaces";
import {useReducer, useState} from "react";
import {useCartStore} from "@/store";

interface IAddToCartProps {
  product: IProduct;
}

type IActions = "increment" | "decrement" | "set";

export interface IActionReducerQuantity {
  type: IActions;
  value: number;
}

export default function AddToCart({product}: IAddToCartProps) {
  const addProductToCart = useCartStore(state => state.addProductToCart);
  const [size, setSize] = useState<ISize | undefined>();
  const [posted, setPosted] = useState(false);
  const reducerQuantity = (quantity: number, action: IActionReducerQuantity) => {
    if (quantity + action.value < 1) return quantity;
    switch (action.type) {
      case 'increment':
      case 'decrement':
        return quantity + action.value;
      case 'set':
        return action.value;
      default:
        throw new Error();
    }
  }
  const [quantity, dispatchQuantity] = useReducer(reducerQuantity, 1);
  const addToCart = () => {
    setPosted(true);
    if (!size) return;
    const cartProduct: ICartProduct = {
      id: product.id,
      image: product.images[1],
      price: product.price,
      quantity,
      size,
      slug: product.slug,
      title: product.title
    };
    addProductToCart(cartProduct);
    setPosted(false);
    dispatchQuantity({
      type: "set",
      value: 1
    });
    setSize(undefined);
  }
  return (
    <>
      {
        posted && !size && <span className={"mt-2 text-red-500"}>
          You must select a size.
        </span>
      }
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={size => setSize(size)}
      />
      <QuantitySelector quantity={quantity} onQuantityChanged={quantityChanged => dispatchQuantity(quantityChanged)}/>
      <button onClick={addToCart} className={"btn-primary my-5"}>
        Add to the Cart
      </button>
    </>
  );
}