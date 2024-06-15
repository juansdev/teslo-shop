"use client";

import {useEffect, useState} from "react";
import {getStockBySlug} from "@/actions";
import {titleFont} from "@/config/fonts";

interface StockLabelProps {
  slug: string;
}

export const StockLabel = ({slug}: StockLabelProps) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getStockBySlug(slug).then(inStock => {
      setStock(inStock);
      setIsLoading(false);
    });
  }, [slug]);
  return (
    <>
      {
        isLoading ?
          <h1 className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
            &nbsp;
          </h1> :
          <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
            Stock: {stock}
          </h1>
      }
    </>
  );
}