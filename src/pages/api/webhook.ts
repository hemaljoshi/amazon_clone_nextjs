import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import * as admin from "firebase-admin";

const serviceAccount = require("./permissions.js");

// Secure a connection to Firebase from the backend
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

// Establish connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Endpoint to create a checkout session
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session: any) => {
  console.log("Fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
    });
};

const hook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    // Verify that the EVENT posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err: any) {
      console.log("ERROR", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfill the purchase
      return fulfillOrder(session)
        .then(() => {
          res.status(200).json({ received: true });
        })
        .catch((err) => {
          res.status(400).send(`Webhook Error: ${err.message}`);
        });
    }
  }
};

export default hook;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
