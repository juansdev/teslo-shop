export const revalidate = 60;

import {Pagination, ProductGrid, Title} from "@/components";
import {getPaginatedProductsWithImages} from "@/actions";

interface IHomeProps {
  searchParams: {
    page?: string;
  }
}

export default async function Home({searchParams}: IHomeProps) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const {products, totalPages} = await getPaginatedProductsWithImages({
    paginationOptions: {
      page
    }
  });
  return (
    <>
      <Title title={"Shop"} subtitle={"All Products"} className={"mb-2"}></Title>
      <ProductGrid products={products}></ProductGrid>
      <Pagination totalPages={totalPages}/>
    </>
  );
}
