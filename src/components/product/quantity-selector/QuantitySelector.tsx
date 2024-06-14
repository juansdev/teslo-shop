"use client";

import {IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import {useState} from "react";

interface IQuantitySelectorProps {
  quantity: number;
}

export const QuantitySelector = ({quantity}: IQuantitySelectorProps) => {
  const [count, setCount] = useState(quantity);
  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;
    setCount(count + value);
  }
  return (
    <div className={"flex"}>
      <button>
        <IoRemoveCircleOutline onClick={() => onQuantityChange(-1)} size={30}/>
      </button>
      <span className={"w-20 mx-3 px-5 bg-gray-100 text-center text-black dark:text-white dark:bg-gray-700 rounded"}>
        {count}
      </span>
      <button>
        <IoAddCircleOutline onClick={() => onQuantityChange(1)} size={30}/>
      </button>
    </div>
  );
}