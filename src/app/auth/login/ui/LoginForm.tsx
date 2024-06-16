"use client";

import Link from "next/link";
import {authenticate} from "@/actions";
import {useFormState, useFormStatus} from "react-dom";
import {IoInformationCircle} from "react-icons/io5";
import clsx from "clsx";
import {useEffect} from "react";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  useEffect(() => {
    if (errorMessage === "Success") window.location.replace("/");
  }, [errorMessage]);
  return (
    <form action={dispatch} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input id={"email"} name={"email"}
             className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black"
             type="email"/>
      <label htmlFor="password">Password</label>
      <input id={"password"} name={"password"}
             className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black"
             type="password"/>


      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <div className={"mb-2 flex flex-row"}>
            <IoInformationCircle className="h-5 w-5 text-red-500"/>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </div>
        )}
      </div>
      <LoginButton/>
      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">OR</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <Link
        href={"/auth/new-account"}
        className="btn-secondary text-center">
        Create a new account
      </Link>
    </form>
  );
}

function LoginButton() {
  const {pending} = useFormStatus();
  return (
    <button type={"submit"}
            className={
              clsx({
                "btn-primary": !pending,
                "btn-disabled": pending
              })
            } disabled={pending}>
      Login
    </button>
  );
}