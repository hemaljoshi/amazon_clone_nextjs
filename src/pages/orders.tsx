import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import moment from "moment";
import { getDocs, collection } from "firebase/firestore";
import React from "react";
import db from "../../firebase";
import Order from "@/components/Order";

const Orders = ({ orders }: any) => {
  const { data: session } = useSession();

  console.log("orders:", orders);

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h1>{orders.length} orders</h1>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4 ">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }: any) => {
              return (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amountShipping}
                  items={items}
                  timestamp={timestamp}
                  images={images}
                />
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;
export async function getServerSideProps(context: any) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // Firebase db
  const email = session?.user?.email ?? "";

  let orders: any = [];
  if (!email || email !== "") {
    const docRef = collection(db, "users", email, "orders");
    const stripeOrders = await getDocs(docRef);
    orders = await Promise.all(
      stripeOrders.docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping ?? 0,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, {
            limit: 100,
          })
        ).data,
      }))
    );
  }

  return {
    props: {
      orders,
    },
  };
}
