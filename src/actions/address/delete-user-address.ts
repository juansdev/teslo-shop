"use server";

import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
  try {
    await prisma.userAddress.delete({
      where: {
        userId
      }
    });
    return {
      ok: true,
      message: "The address was deleted successfully."
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "It can not save the address."
    }
  }
}