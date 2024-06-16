"use server";

import {IAddress, ISize} from "@/interfaces";
import {auth} from "@/auth.config";
import prisma from "@/lib/prisma";

interface IProductToOrder {
  productId: string;
  quantity: number;
  size: ISize;
}

export const placeOrder = async (productIds: IProductToOrder[], address: IAddress) => {
  const session = await auth();
  const userId = session!.user.id;
  if (!userId)
    return {
      ok: false,
      message: "There is not session of user."
    }
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map(product => product.productId)
      }
    }
  });
  const itemsInOrder = productIds.reduce((count, product) => count + product.quantity, 0);

  const {subTotal, tax, total} = productIds.reduce((totals, item) => {
    const productQuantity = item.quantity;
    const product = products.find(product => product.id === item.productId);
    if (!product) throw new Error(`${item.productId} not exist.`);
    const subTotal = product.price * productQuantity;
    totals.subTotal += subTotal;
    totals.tax += subTotal * .15;
    totals.total += subTotal * 1.15;
    return totals;
  }, {subTotal: 0, tax: 0, total: 0});

  // Create the transaction of the database.
  try {
    const prismaTx = await prisma.$transaction(async tx => {

      // 1. Update the stock of the products.
      const updatedProductsPromises = [];
      for (const product of products) {
        const productQuantity = productIds.filter(
          productId => productId.productId === product.id
        ).reduce((acc, item) => item.quantity + acc, 0);

        if (!productQuantity) throw new Error(`${product.id}, doesn't have the amount defined`);
        updatedProductsPromises.push(
          tx.product.update({
            where: {
              id: product.id
            },
            data: {
              inStock: {
                decrement: productQuantity,
              }
            }
          })
        );
      }

      const updatedProducts = await Promise.all(updatedProductsPromises);
      // Verify negative values in the exists = There are not stock.
      updatedProducts.forEach(product => {
        if (product.inStock < 0) throw new Error(`${product.title} doesn't have stock enough.`);
      });

      // 2. Create the order - Header - Details.
      const order = await tx.order.create({
        data: {
          subTotal,
          tax,
          total,
          itemsInOrder,
          userId,
          OrderItem: {
            createMany: {
              data: productIds.map(product => ({
                quantity: product.quantity,
                size: product.size,
                productId: product.productId,
                price: products.find(originalProduct => product.productId === originalProduct.id)?.price ?? 0
              }))
            }
          }
        }
      });

      // Validate if the price is zero, throw an error.


      // 3. Create the address of the order.
      const country = await prisma.country.findUnique({
        where: {
          id: address.country
        },
        select: {
          id: true
        }
      });
      if (!country) throw new Error(`The country with the ID ${address.country} could not found`);
      const countryId = country.id;
      const OrderAddress = await tx.orderAddress.create({
        data: {
          firstName: address.firstName,
          lastName: address.lastName,
          address: address.address,
          optionalAddress: address.optionalAddress || null,
          postalCode: address.postalCode,
          city: address.city,
          phone: address.phone,
          countryId,
          orderId: order.id
        }
      });

      return {
        order,
        updatedProducts,
        OrderAddress
      }
    });
    return {
      ok: true,
      order: prismaTx.order.id,
      prismaTx
    }
  } catch (error: any) {
    return {
      ok: false,
      message: error?.message
    }
  }
}