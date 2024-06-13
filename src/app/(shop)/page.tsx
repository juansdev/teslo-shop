import {ProductGrid, Title} from "@/components";
import {initialData} from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title={"Shop"} subtitle={"All Products"} className={"mb-2"}></Title>
      <ProductGrid products={products}></ProductGrid>
    </>
  );
}
