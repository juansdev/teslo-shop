import {redirect} from "next/navigation";
import {IoCardOutline} from "react-icons/io5";
import Link from "next/link";
import {Pagination, Title} from "@/components";
import {getPaginatedOrders} from "@/actions";

interface IOrdersPageProps {
  searchParams: {
    page?: string;
  }
}

export default async function OrdersPage({searchParams}: IOrdersPageProps) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const {ok, ...restResponse} = await getPaginatedOrders({
    paginationOptions: {
      page
    }
  });
  if (!ok) redirect("/auth/login");
  const {currentPage, totalPages, orders} = restResponse;
  return (
    <>
      <Title title="All Orders"/>
      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
          <tr>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              #ID
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Full Name
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Status
            </th>
            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Options
            </th>
          </tr>
          </thead>
          <tbody>
          {
            orders!.map(order => (
              <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id.split("-").at(-1)}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {
                    order.isPaid ? (
                      <>
                        <IoCardOutline className="text-green-800"/>
                        <span className='mx-2 text-green-800'>Purchased</span>
                      </>
                    ) : (
                      <>
                        <IoCardOutline className="text-red-800"/>
                        <span className='mx-2 text-red-800'>Payment Not Succeed</span>
                      </>
                    )
                  }
                </td>
                <td className="text-sm text-gray-900 font-light px-6 ">
                  <Link href={`/orders/${order.id}`} className="hover:underline">
                    See order
                  </Link>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <Pagination totalPages={totalPages!}/>
      </div>
    </>
  );
}