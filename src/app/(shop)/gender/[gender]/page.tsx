export const revalidate = 60;

import {notFound} from "next/navigation";
import {Pagination, ProductGrid, Title} from "@/components";
import {ICategory} from "@/interfaces";
import {getPaginatedProductsWithImages} from "@/actions";

interface ICategoryPageProps {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function GenderPage({params, searchParams}: ICategoryPageProps) {
  const {gender} = params;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const labels: Record<ICategory, string> = {
    "men": "for Men",
    "women": "for Women",
    "kid": "for Kids",
    "unisex": "for Everybody"
  }
  if (!Object.keys(labels).includes(gender)) notFound();
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({
    where: {
      gender
    },
    paginationOptions: {
      page
    }
  });
  if (!products.length) notFound();
  const category = gender as ICategory;
  return (<>
    <Title title={`Articles of ${labels[category]}`} subtitle={"All Products"}></Title>
    <ProductGrid products={products}></ProductGrid>
    <Pagination totalPages={totalPages}/>
  </>);
}