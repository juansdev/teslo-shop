import prisma from "../lib/prisma";
import {initialData} from "./seed";

async function main() {
  // 1. Delete previous records
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Categories
  const {categories, products} = initialData;
  const categoriesData = categories.map(category => ({
    name: category
  }));
  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDb = await prisma.category.findMany();
  const categoriesMap = categoriesDb.reduce((initial, category) => {
    initial[category.name.toLowerCase()] = category.id;
    return initial;
  }, {} as Record<string, string>);

  // Products
  for (const product of products) {
    const {type, images, ...rest} = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[product.type]
      }
    });
    // Images
    const imagesData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));
    await prisma.productImage.createMany({
      data: imagesData
    });
  }

  console.log("Seed Executed Successful");
}

(async () => {
  if (process.env.NODE_ENV === 'production') return;
  await main();
})();