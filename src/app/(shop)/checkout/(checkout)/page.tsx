import Link from "next/link";
import {Title} from "@/components";
import {ProductsInCart} from "@/app/(shop)/checkout/(checkout)/ui/ProductsInCart";
import PlaceOrder from "@/app/(shop)/checkout/(checkout)/ui/PlaceOrder";

export default function CheckoutPage() {
  return (
    <div className={"flex justify-center items-center mb-72 px-10 sm:px-0"}>
      <div className={"flex flex-col w-[1000px]"}>
        <Title title={"Verify Order"}/>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-10"}>
          <div className={"flex flex-col mt-5"}>
            <span className={"text-xl"}>Fixing Elements</span>
            <Link href={"/"} className={"underline mb-5"}>
              Edit Cart
            </Link>
            <ProductsInCart/>
          </div>
          <PlaceOrder/>
        </div>
      </div>
    </div>
  );
}