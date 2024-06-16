"use server";

import prisma from "@/lib/prisma";
import {auth} from "@/auth.config";

export const getOrderById = async (id: string) => {
  const session = await auth();
  if (!session?.user) {
    return {
      ok: false,
      message: "The user must be authenticated."
    }
  }
  try {
    const order = await prisma.order.findUnique({
      where: {id},
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            size: true,
            product: {
              select: {
                title: true,
                slug: true,
                ProductImage: {
                  select: {
                    url: true
                  },
                  take: 1
                }
              }
            }
          }
        }
      }
    });
    if (!order || !order.OrderAddress)
      return {
        ok: false,
        message: `${id} not found`
      }
    if (session.user.role === "user" && session.user.id !== order.userId) return {
      ok: false,
      message: `Order #${id} doesn't is of the user.`
    };
    const countryInOrder = await prisma.country.findUnique({
      where: {
        id: order.OrderAddress.countryId
      },
      select: {
        name: true
      }
    });
    return {
      ok: true,
      order,
      countryInOrder
    }
  } catch (error) {
    return {
      ok: false,
      message: "Order doesn't exist."
    }
  }
}