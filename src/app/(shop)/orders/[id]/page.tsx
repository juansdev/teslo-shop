import Image from "next/image";
import {Title} from "@/components";
import {initialData} from "@/seed/seed";
import clsx from "clsx";
import {IoCardOutline} from "react-icons/io5";


const productsInCar = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
];

interface IOrderPageProps {
  params: {
    id: string;
  }
}

export default function OrderPage({params}: IOrderPageProps) {
  const {id} = params;

  return (
    <div className={"flex justify-center items-center mb-72 px-10 sm:px-0"}>
      <div className={"flex flex-col w-[1000px]"}>
        <Title title={`Order #${id}`}/>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-10"}>
          <div className={"flex flex-col mt-5"}>
            <div className={clsx(
              "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
              {
                "bg-red-500": false,
                "bg-green-500": true
              }
            )}>
              <IoCardOutline size={30}/>
              {/*<span className={"mx-2"}>Purchase Pending</span>*/}
              <span className={"mx-2"}>Purchase Confirmed</span>
            </div>
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
                    <p>${product.price} x 3</p>
                    <p className={"font-bold"}>Subtotal: ${product.price * 3}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className={"bg-white rounded-xl shadow-xl p-7"}>
            <h2 className={"text-2xl mb-2 text-black"}>Delivery Address</h2>
            <div className={"mb-10 text-black"}>
              <p className={"text-xl"}>Juan Serrano</p>
              <p className={"font-bold"}>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuauhtémoc</p>
              <p>Colombia</p>
              <p>ZC 123456789</p>
              <p>123.456.789</p>
            </div>
            <div className={"w-full h-0.5 rounded bg-gray-200 mb-10"}/>
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
              <div className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true
                }
              )}>
                <IoCardOutline size={30}/>
                {/*<span className={"mx-2"}>Purchase Pending</span>*/}
                <span className={"mx-2"}>Purchase Confirmed</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}