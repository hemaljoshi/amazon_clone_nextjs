import moment from "moment";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";

const Order = ({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
}: any) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p>
            <Currency quantity={amount} currency="INR" /> - Next Day Delivery
            {""}
          </p>
          <p>
            <Currency quantity={amountShipping} currency="INR" />{" "}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          Order # {id}
        </p>
      </div>
      <div className="px-5 pb-2">
        <div className="flex space-x-10 overflow-x-auto">
          {images.map((image: any, i: any) => (
            <Image
              src={image}
              key={i}
              alt="Product Image"
              className="h-20 object-contain sm:h-32 rounded-md"
              width={80}
              height={80}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
