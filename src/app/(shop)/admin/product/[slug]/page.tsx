import {Title} from "@/components";
import {getCategories, getProductBySlug} from "@/actions";
import {redirect} from "next/navigation";
import {ProductForm} from "@/app/(shop)/admin/product/[slug]/ui/ProductForm";

interface IProductPageProps {
  params: {
    slug: string;
  }
}

export default async function ProductPage({params}: IProductPageProps) {
  const {slug} = params;
  const [product, categories] = await Promise.all([getProductBySlug(slug), getCategories()]);
  if ((!product || !categories) && slug !== "new") redirect("/admin/products");
  const title = slug === "new" ? "New Product" : "Edit Product";
  return (
    <>
      <Title title={title}/>
      <ProductForm product={product ?? {}} categories={categories}/>
    </>
  );
}