"use server";
import {v2 as cloudinary} from 'cloudinary';
import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

export const deleteProductImage = async (imageId: number, imageUrl: string) => {
  if (!imageUrl.startsWith("http")) return {
    ok: false,
    error: "It can not delete images from File System"
  }

  const imageName = imageUrl.split("/").pop()?.split(".")[0] ?? "";
  try {
    await cloudinary.uploader.destroy(imageName);
    const deleteImage = await prisma.productImage.delete({
      where: {
        id: imageId
      },
      select: {
        product: {
          select: {
            slug: true
          }
        }
      }
    });
    revalidatePath(`/admin/products`);
    revalidatePath(`/admin/products/${deleteImage.product.slug}`);
    revalidatePath(`/product/${deleteImage.product.slug}`);
  } catch (error) {
    return {
      ok: false,
      message: "It can not delete the image"
    }
  }
}