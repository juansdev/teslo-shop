import prisma from "../lib/prisma";
import {initialData} from "./seed";
import {countries} from "./seed-countries";

async function main() {
  // 1. Delete previous records
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.country.deleteMany();

  // Categories
  const {categories, products, users} = initialData;
  await prisma.user.createMany({
    data: users
  });
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

  // Countries
  const listCountries = countries.map(({name, id}) => ({
    name,
    code: id
  }));
  await prisma.country.createMany({
    data: listCountries
  });

  console.log("Seed Executed Successful");
}

(async () => {
  if (process.env.NODE_ENV === 'production') return;
  await main();
})();