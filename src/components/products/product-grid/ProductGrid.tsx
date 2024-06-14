import {IProduct} from "@/interfaces";
import {ProductGridItem} from "@/components";

interface IProductGridProps {
  products: IProduct[];
}

export const ProductGrid = ({products}: IProductGridProps) => {
  return (
    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10"}>
      {
        products.map(product => (
          <ProductGridItem product={product} key={product.slug}></ProductGridItem>
        ))
      }
    </div>
  );
}