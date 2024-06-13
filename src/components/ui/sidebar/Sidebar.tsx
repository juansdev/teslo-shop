"use client";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline
} from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";
import {useUIStore} from "@/store";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>
      {
        isSideMenuOpen && (<>
            <div className={"fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"}/>
            <div onClick={closeMenu} className={"fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"}/>
          </>
        )
      }
      <nav
        className={
          clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen
            })
        }>
        <IoCloseOutline onClick={closeMenu} size={50} className={"absolute top-5 right-5 cursor-pointer text-black"}/>
        <div className={"relative mt-14"}>
          <IoSearchOutline size={20} className={"absolute top-2 left-2 text-black"}/>
          <input type="text" placeholder={"Search"}
                 className={"w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-blue focus:border-blue-500"}/>
        </div>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoPersonOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Profile</span>
        </Link>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoTicketOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Orders</span>
        </Link>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoLogInOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Login</span>
        </Link>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoLogOutOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Logout</span>
        </Link>

        <div className={"w-full h-px bg-gray-200 my-10"}/>

        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoShirtOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Products</span>
        </Link>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoTicketOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Orders</span>
        </Link>
        <Link href={"/"} className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
          <IoPeopleOutline className={"text-black"} size={30}/>
          <span className={"ml-3 text-xl text-black"}>Users</span>
        </Link>
      </nav>
    </div>
  );
}