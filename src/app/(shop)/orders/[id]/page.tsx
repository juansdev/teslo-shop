import Image from "next/image";
import {notFound} from "next/navigation";
import {OrderStatus, PayPalButton, Title} from "@/components";
import {getOrderById} from "@/actions";
import {currencyFormat} from "@/utils";

interface IOrderPageProps {
  params: {
    id: string;
  }
}

export default async function OrderPage({params}: IOrderPageProps) {
  const {id} = params;
  const {order, ok, countryInOrder} = await getOrderById(id);
  if (!ok || !order || !countryInOrder)
    notFound();
  const orderItems = order.OrderItem;
  const orderAddress = order.OrderAddress!;
  const totalProducts = orderItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className={"flex justify-center items-center mb-72 px-10 sm:px-0"}>
      <div className={"flex flex-col w-[1000px]"}>
        <Title title={`Order #${id}`}/>
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-10"}>
          <div className={"flex flex-col mt-5"}>
            <OrderStatus isPaid={order.isPaid}/>
            {
              order.OrderItem.map((item, index) => (
                <div key={item.product.slug + "_" + index} className={"flex mb-5"}>
                  <Image
                    src={`/products/${item.product.ProductImage[0].url}`}
                    width={100}
                    height={100}
                    alt={item.product.title}
                    style={{
                      width: "100px",
                      height: "100px"
                    }}
                    className={"mr-5"}/>
                  <div>
                    <p>{item.product.title}</p>
                    <p>${item.price} x ${item.quantity}</p>
                    <p className={"font-bold"}>Subtotal:
                      {currencyFormat(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className={"bg-white rounded-xl shadow-xl p-7"}>
            <h2 className={"text-2xl mb-2 text-black"}>Delivery Address</h2>
            <div className={"mb-10 text-black"}>
              <p className={"text-xl"}>{orderAddress.firstName} {orderAddress.lastName}</p>
              <p className={"font-bold"}>{orderAddress.address}</p>
              {orderAddress.optionalAddress && <p>{orderAddress.optionalAddress}</p>}
              <p>{orderAddress.city}, {countryInOrder.name}</p>
              <p>ZC {orderAddress.postalCode}</p>
              <p>{orderAddress.phone}</p>
            </div>
            <div className={"w-full h-0.5 rounded bg-gray-200 mb-10"}/>
            <h2 className={"text-2xl mb-2 text-black"}>Resume of order</h2>
            <div className={"grid grid-cols-2"}>
              <span className={"text-black"}>
                No. Products
              </span>
              <span className={"text-black text-right"}>
                {`${totalProducts} Article${totalProducts > 1 ? "s" : ""}`}
              </span>

              <span className={"text-black"}>
                Subtotal
              </span>
              <span className={"text-black text-right"}>
                {currencyFormat(order.subTotal)}
              </span>

              <span className={"text-black"}>
                Taxes (15%)
              </span>
              <span className={"text-black text-right"}>
                {currencyFormat(order.tax)}
              </span>

              <span className={"mt-5 text-2xl text-black"}>
                Total
              </span>
              <span className={"mt-5 text-2xl text-black text-right"}>
                {currencyFormat(order.total)}
              </span>
            </div>

            <div className={"mt-5 mb-2 w-full"}>
              {!order.isPaid && <PayPalButton amount={order.total} orderId={order.id}/>}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}