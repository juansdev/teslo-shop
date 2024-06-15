"use client";

import Link from "next/link";
import {titleFont} from "@/config/fonts";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5";
import {useCartStore, useUIStore} from "@/store";
import {useEffect, useState} from "react";

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const totalItemsInCart = useCartStore(state => state.getTotalItems());

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <nav className={"flex px-5 justify-between items-center w-full"}>
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>
      <div className={"hidden sm:block"}>
        <Link className={"m-2 p-2 rounded-md transition-all hover:bg-gray-100"} href={"/gender/men"}>
          Men
        </Link>
        <Link className={"m-2 p-2 rounded-md transition-all hover:bg-gray-100"} href={"/gender/women"}>
          Women
        </Link>
        <Link className={"m-2 p-2 rounded-md transition-all hover:bg-gray-100"} href={"/gender/kid"}>
          Kids
        </Link>
      </div>
      <div className={"flex items-center"}>
        <Link href={"/search"} className={"mx-2"}>
          <IoSearchOutline className={"w-5 h-5"}></IoSearchOutline>
        </Link>
        <Link href={
          !totalItemsInCart && !isLoading ? "/empty" : "/cart"
        } className={"mx-2"}>
          <div className={"relative"}>
            {
              (!isLoading && totalItemsInCart > 0) &&
                <span className={"absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2"}>
                {totalItemsInCart}
              </span>
            }
            <IoCartOutline className={"w-5 h-5"}></IoCartOutline>
          </div>
        </Link>
        <button className={"m-2 p-2 rounded-md transition-all hover:bg-gray-100"} onClick={openSideMenu}>
          Menú
        </button>
      </div>
    </nav>
  );
}