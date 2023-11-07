import Header from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 w-10 h-10" />
            <h1 className="text-3xl border-b pb-4">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation once
            your item has shipped. If you would like to check the status of your
            order(s) please press the link below.
          </p>
          <button
            className="button mt-8"
            onClick={() => {
              router.push("/orders");
            }}
            role="link"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
