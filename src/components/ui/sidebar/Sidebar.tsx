"use client";

import {IoCloseOutline, IoSearchOutline} from "react-icons/io5";
import clsx from "clsx";
import {useUIStore} from "@/store";
import {ItemMenuByFilter} from "@/components/ui/sidebar/MenuByRol";
import {logout} from "@/actions";
import {useSession} from "next-auth/react";
import {isPathProtected} from "@/auth.config";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);
  const {data: session} = useSession();
  const isUserAuthenticated = !!session?.user;

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

        <ItemMenuByFilter
          menu={"Profile"}
          validIfUserIsAuthenticated={true}
          validIfUserHasRole={true}
          listRolesPermitted={["user", "admin"]}
          onClick={closeMenu}
        />

        <ItemMenuByFilter
          menu={"Orders"}
          validIfUserIsAuthenticated={true}
          validIfUserHasRole={true}
          listRolesPermitted={["user", "admin"]}
          onClick={closeMenu}
        />

        {!isUserAuthenticated && <ItemMenuByFilter
            menu={"Login"}
            onClick={closeMenu}
        />}

        <ItemMenuByFilter
          menu={"Logout"}
          validIfUserIsAuthenticated={true}
          onClick={async () => {
            await logout();
            if (!isPathProtected(window.location.pathname)) window.location.replace("/");
          }}
        />

        <div className={"w-full h-px bg-gray-200 my-10"}/>

        <ItemMenuByFilter
          menu={"Products"}
          validIfUserIsAuthenticated={true}
          validIfUserHasRole={true}
          listRolesPermitted={["admin"]}
          onClick={closeMenu}
        />

        <ItemMenuByFilter
          menu={"AdminOrders"}
          validIfUserIsAuthenticated={true}
          validIfUserHasRole={true}
          listRolesPermitted={["admin"]}
          onClick={closeMenu}
        />

        <ItemMenuByFilter
          menu={"Users"}
          validIfUserIsAuthenticated={true}
          validIfUserHasRole={true}
          listRolesPermitted={["admin"]}
          onClick={closeMenu}
        />
      </nav>
    </div>
  );
}