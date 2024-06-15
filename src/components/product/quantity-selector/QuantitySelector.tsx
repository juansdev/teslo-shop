"use client";

import {IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import {Component} from "react";
import {IActionReducerQuantity} from "@/app/(shop)/product/[slug]/ui/AddToCart";

interface IQuantitySelectorProps {
  quantity: number;
  onQuantityChanged: ({type, value}: IActionReducerQuantity) => void;
}

export class QuantitySelector extends Component<IQuantitySelectorProps> {
  render() {
    let {quantity, onQuantityChanged} = this.props;
    return (
      <div className={"flex"}>
        <button>
          <IoRemoveCircleOutline onClick={() => onQuantityChanged({type: "decrement", value: -1})} size={30}/>
        </button>
        <span className={"w-20 mx-3 px-5 bg-gray-100 text-center text-black dark:text-white dark:bg-gray-700 rounded"}>
        {quantity}
      </span>
        <button>
          <IoAddCircleOutline onClick={() => onQuantityChanged({type: "increment", value: +1})} size={30}/>
        </button>
      </div>
    );
  }
}