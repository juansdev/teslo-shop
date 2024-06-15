"use server";

import prisma from "@/lib/prisma";

interface IPaginationOptions {
  page?: number;
  take?: number;
}

interface IOptions {
  where?: {
    [key: string]: string;
  },
  paginationOptions: IPaginationOptions
}

export const getPaginatedProductsWithImages = async ({
                                                       where,
                                                       paginationOptions: {
                                                         page = 1,
                                                         take = 12
                                                       }
                                                     }: IOptions) => {
  if (isNaN(Number(page)) || page < 1) page = 1;
  try {
    // 1. Get Products
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      },
      where
    });

    // 2. Get total pages
    const totalCount = await prisma.product.count({where});
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    };
  } catch (_) {
    throw new Error("Can not load the products");
  }

}