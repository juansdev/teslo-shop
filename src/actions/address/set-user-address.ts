"use server";

import {IAddress} from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async (address: IAddress, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);
    return {
      ok: true,
      address: newAddress
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "It can not save the address."
    }
  }
}

const createOrReplaceAddress = async (address: IAddress, userId: string) => {
  console.log(userId);
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: {userId}
    });
    const addressToSave = {
      userId,
      address: address.address,
      optionalAddress: address.optionalAddress,
      countryId: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      city: address.city,
      phone: address.phone,
      postalCode: address.postalCode
    }
    if (!storedAddress)
      return await prisma.userAddress.create({
        data: addressToSave
      });
    return await prisma.userAddress.update({
      where: {
        userId
      },
      data: addressToSave
    });
  } catch (error) {
    console.log(error);
    throw new Error("It can not save the address.");
  }
}
