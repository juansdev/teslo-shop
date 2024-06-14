import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import {initialData} from "@/seed/seed";
import {QuantitySelector, Title} from "@/components";

const productsInCar = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

export default function CartPage() {
  if (!productsInCar.length) redirect("/empty");
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

            {
              productsInCar.map(product => (
                <div key={product.slug} className={"flex mb-5"}>
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    style={{
                      width: "100px",
                      height: "100px"
                    }}
                    className={"mr-5"}/>
                  <div>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <QuantitySelector quantity={3}/>
                    <button className={"underline mt-3"}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className={"bg-white rounded-xl shadow-xl p-7 h-fit"}>
            <h2 className={"text-2xl mb-2 text-black"}>Resume of order</h2>
            <div className={"grid grid-cols-2"}>
              <span className={"text-black"}>
                No. Products
              </span>
              <span className={"text-black text-right"}>
                3 Articles
              </span>

              <span className={"text-black"}>
                Subtotal
              </span>
              <span className={"text-black text-right"}>
                $ 100
              </span>

              <span className={"text-black"}>
                Taxes (15%)
              </span>
              <span className={"text-black text-right"}>
                $ 100
              </span>

              <span className={"mt-5 text-2xl text-black"}>
                Total
              </span>
              <span className={"mt-5 text-2xl text-black text-right"}>
                $ 100
              </span>
            </div>

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