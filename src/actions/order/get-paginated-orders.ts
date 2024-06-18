"use server";

import {auth} from "@/auth.config";
import prisma from "@/lib/prisma";
import {IOptions} from "@/interfaces";

export const getPaginatedOrders = async ({
                                           where,
                                           paginationOptions: {
                                             page = 1,
                                             take = 12
                                           }
                                         }: IOptions) => {
  const session = await auth();

  if (session?.user.role !== "admin") return {
    ok: false,
    message: "Must be authenticated."
  }
  if (isNaN(Number(page)) || page < 1) page = 1;
  try {
    const orders = await prisma.order.findMany({
      take,
      skip: (page - 1) * take,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        OrderAddress: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      },
      where
    });

    const totalCount = await prisma.order.count({where});
    const totalPages = Math.ceil(totalCount / take);

    return {
      ok: true,
      currentPage: page,
      totalPages,
      orders: orders
    };
  } catch (_) {
    throw new Error("Can not load the orders");
  }
}