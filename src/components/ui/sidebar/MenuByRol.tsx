"use client";

import {Role} from "@prisma/client";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline
} from "react-icons/io5";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

interface IItemMenuByFilterProps {
  menu: "Profile" | "Orders" | "AdminOrders" | "Products" | "Users" | "Login" | "Logout";
  validByCustomConditional?: boolean;
  validIfUserIsAuthenticated?: boolean;
  validIfUserHasRole?: boolean;
  listRolesPermitted?: Role[];
  onClick?: any
}

export const ItemMenuByFilter = ({
                                   menu,
                                   validByCustomConditional = true,
                                   validIfUserIsAuthenticated = false,
                                   validIfUserHasRole = false,
                                   listRolesPermitted = [],
                                   onClick
                                 }: IItemMenuByFilterProps) => {
  const {data: session} = useSession();
  const [isValid, setIsValid] = useState(false);
  const [itemMenu, setItemMenu] = useState(<></>);
  useEffect(() => {
    const isUserAuthenticated = !!session?.user;
    const currentRol = session?.user?.role;

    const isUserValid = validIfUserIsAuthenticated && isUserAuthenticated || !validIfUserIsAuthenticated;
    const isCurrentRolValid = validIfUserHasRole && currentRol && listRolesPermitted.includes(currentRol) || !validIfUserHasRole;
    setIsValid(isCurrentRolValid && isUserValid && validByCustomConditional);
  }, [listRolesPermitted, session, validByCustomConditional, validIfUserHasRole, validIfUserIsAuthenticated]);
  useEffect(() => {
    if (isValid)
      switch (menu) {
        case "Profile":
          setItemMenu(
            <Link onClick={() => onClick()} href={"/profile"}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoPersonOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Profile</span>
            </Link>
          );
          break;
        case "Orders":
          setItemMenu(
            <Link href={"/orders"} onClick={() => onClick()}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoTicketOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Orders</span>
            </Link>
          );
          break;
        case "AdminOrders":
          setItemMenu(
            <Link href={"/admin/orders"} onClick={() => onClick()}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoTicketOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Orders</span>
            </Link>
          );
          break;
        case "Products":
          setItemMenu(
            <Link href={"/admin/products"} onClick={() => onClick()}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoShirtOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Products</span>
            </Link>
          );
          break;
        case "Users":
          setItemMenu(
            <Link href={"/admin/users"} onClick={() => onClick()}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoPeopleOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Users</span>
            </Link>
          );
          break;
        case "Login":
          setItemMenu(
            <Link href={"/auth/login"} onClick={() => onClick()}
                  className={"flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}>
              <IoLogInOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Login</span>
            </Link>
          );
          break;
        case "Logout":
          setItemMenu(
            <button className={"flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"}
                    onClick={() => onClick()}>
              <IoLogOutOutline className={"text-black"} size={30}/>
              <span className={"ml-3 text-xl text-black"}>Logout</span>
            </button>
          );
          break;
      }
  }, [isValid, menu, onClick]);
  return itemMenu;
}