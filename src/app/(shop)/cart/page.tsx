import Link from "next/link";
import {ProductsInCart} from "@/app/(shop)/cart/ui/ProductsInCart";
import {Title} from "@/components";
import OrderSummary from "@/app/(shop)/cart/ui/OrderSummary";

export default function CartPage() {
  // if (!productsInCar.length) redirect("/empty");
  return (
    <div className={"flex justify-center items-center mb-72 px-10 sm:px-0"}>
      <div className={"flex flex-col w-[1000px]"}>
        <Title title={"Cart"}/>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-10"}>
          <div className={"flex flex-col mt-5"}>
            <span className={"text-xl"}>Add More Items</span>
            <Link href={"/"} className={"underline mb-5"}>
              Resume shopping
            </Link>
            <ProductsInCart/>
          </div>

          <div className={"bg-white rounded-xl shadow-xl p-7 h-fit"}>
            <h2 className={"text-2xl mb-2 text-black"}>Resume of order</h2>
            <OrderSummary/>
            <div className={"mt-5 mb-2 w-full"}>
              <Link href={"/checkout/address"} className={"flex btn-primary justify-center text-black"}>
                Checkout
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}