import clsx from "clsx";
import {IoCardOutline} from "react-icons/io5";

interface IOrderStatusProps {
  isPaid: boolean;
}

export const OrderStatus = ({isPaid}: IOrderStatusProps) => {
  return (
    <div className={clsx(
      "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
      {
        "bg-red-500": !isPaid,
        "bg-green-500": isPaid
      }
    )}>
      <IoCardOutline size={30}/>
      <span className={"mx-2"}>
                {isPaid ? "Purchase Confirmed" : "Purchase Pending"}
              </span>
    </div>
  );
}