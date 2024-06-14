import {notFound} from "next/navigation";
import {initialData} from "@/seed/seed";
import {ProductGrid, Title} from "@/components";
import {ICategory} from "@/interfaces";

interface ICategoryPageProps {
  params: {
    id: string;
  }
}

export default function CategoryPage({params}: ICategoryPageProps) {
  const {id} = params;
  const seedProducts = initialData.products;
  const products = seedProducts.filter(product => product.gender === id);
  const labels: Record<ICategory, string> = {
    "men": "for Men",
    "women": "for Women",
    "kid": "for Kids",
    "unisex": "for Everybody"
  }
  if (!products.length || !Object.keys(labels).includes(id)) notFound();
  const category = id as ICategory;
  return (<>
    <Title title={`Articles of ${labels[category]}`} subtitle={"All Products"}></Title>
    <ProductGrid products={products}></ProductGrid>
  </>);
}