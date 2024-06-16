"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async (fullName: string, email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: fullName,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password)
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    return {
      ok: true,
      user,
      message: "User created successful."
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "It can not create the user."
    }
  }
}