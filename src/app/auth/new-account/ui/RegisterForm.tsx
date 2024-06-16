"use client";

import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import clsx from "clsx";
import {registerUser} from "@/actions";
import {useState} from "react";
import {login} from "@/actions/auth/login";

type IFormInputs = {
  fullName: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const {fullName, email, password} = data;
    const response = await registerUser(fullName, email, password);

    if (!response.ok) {
      setErrorMessage(response.message);
      return;
    }

    await login(email.toLowerCase(), password);
    window.location.replace("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="fullName">Full Name</label>
      <input
        {...register("fullName", {required: true})}
        id={"fullName"}
        name={"fullName"}
        autoFocus={true}
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5 text-black", {
            "border-red-500": errors.fullName
          })
        }
        type="text"/>

      <label htmlFor="email">Email</label>
      <input
        {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
        id={"email"}
        name={"email"}
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5 text-black", {
            "border-red-500": errors.email
          })
        }
        type="text"/>

      <label htmlFor="password">Password</label>
      <input
        {...register("password", {required: true, minLength: 6})}
        id={"password"}
        name={"password"}
        className={
          clsx("px-5 py-2 border bg-gray-200 rounded mb-5 text-black", {
            "border-red-500": errors.password
          })
        }
        type="password"/>

      <span className="text-red-500">{errorMessage}</span>

      <button
        className="btn-primary">
        Create Account
      </button>
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <Link
        href={"/auth/login"}
        className="btn-secondary text-center">
        Login
      </Link>
    </form>
  );
}