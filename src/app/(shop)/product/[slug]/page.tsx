import {Metadata} from "next";
import {notFound} from "next/navigation";
import {titleFont} from "@/config/fonts";
import {ProductMobileSlideshow, ProductSlideShow, StockLabel} from "@/components";
import {getProductBySlug} from "@/actions";
import AddToCart from "@/app/(shop)/product/[slug]/ui/AddToCart";

export const revalidate = 604800; // 7 Days

interface IProductProps {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  {params}: IProductProps
): Promise<Metadata> {
  const {slug} = params;
  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Product Not Found",
    description: product?.description ?? '',
    openGraph: {
      title: product?.title ?? "Product Not Found",
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`]
    }
  };
}

export default async function ProductPage({params}: IProductProps) {
  const {slug} = params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className={"mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3"}>
      <div className={"col-span-1 md:col-span-2"}>
        <ProductSlideShow images={product.images} title={product.title} className={"hidden md:block"}/>
        <ProductMobileSlideshow images={product.images} title={product.title} className={"block md:hidden"}/>
      </div>

      <div className={"col-span-1 px-5"}>
        <StockLabel slug={product.slug}/>
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className={"text-lg mb-5"}>
          ${product.price}
        </p>
        <AddToCart product={product}></AddToCart>

        <h3 className={"font-bold text-sm"}>
          Description
        </h3>
        <p className={"font-light"}>
          {product.description}
        </p>
      </div>
    </div>
  );
}