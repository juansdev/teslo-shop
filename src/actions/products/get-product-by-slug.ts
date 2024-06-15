"use server";

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        slug
      }
    });
    if (!product) return null;
    return {
      ...product,
      images: product.ProductImage.map(image => image.url)
    };
  } catch (error) {
    console.log("error");
    throw new Error("Error to the get a product by slug")
  }
}