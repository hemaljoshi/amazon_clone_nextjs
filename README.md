# Amazon Clone - Next.js

Welcome to the Amazon Clone built with Next.js. This project is a fully functional e-commerce website that replicates the core functionality of Amazon. It includes various modern web development concepts and technologies such as Redux Toolkit, Tailwind CSS, Next.js Server-Side Rendering (SSR), NextAuth.js authentication, webhooks, Stripe integration, Firebase Firestore database, and the Fake Store API for product fetching. This README provides an overview of the project and instructions for setup.

## Live Demo

You can access the live demo of this Amazon Clone at [https://amazon-clone-nextjs-nine.vercel.app/](https://amazon-clone-nextjs-nine.vercel.app/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Listings:** Display a variety of products fetched from the Fake Store API.
- **User Authentication:** Users can create accounts, log in, and log out using NextAuth.js.
- **Shopping Cart:** Users can add and remove items from their shopping cart.
- **Checkout:** Seamless checkout process with Stripe integration.
- **Order History:** Users can view their order history.
- **Real-time Updates:** Utilize webhooks to receive real-time updates on order status changes.
- **Search Functionality:** Search for products by name or category.
- **Responsive Design:** The application is designed to work seamlessly on various screen sizes.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered React applications.
- [Redux Toolkit](https://redux-toolkit.js.org/): Simplify state management in React applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for designing modern web applications.
- [NextAuth.js](https://next-auth.js.org/): Easy authentication for Next.js applications.
- [Stripe](https://stripe.com/): Payment processing integration for handling online payments.
- [Firebase Firestore](https://firebase.google.com/products/firestore): Cloud-hosted NoSQL database for storing user data and orders.
- [Fake Store API](https://fakestoreapi.com/): Provides mock e-commerce data for product listings.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/joshihemal/amazon_clone_nextjs.git
   ```

2. Change the directory to the project folder:

   ```bash
   cd amazon-clone-nextjs
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to set up the required configuration variables:

1. **Firebase Configuration:**

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firestore in your Firebase project.
   - Obtain your Firebase project configuration, including API keys.
   - Update the configuration in `firebase.js`.

2. **Stripe Configuration:**

   - Create a Stripe account on [Stripe](https://stripe.com/).
   - Obtain your Stripe API keys.

3. **NextAuth.js Configuration:**

   - Create an OAuth App on the [GitHub Developer Settings](https://github.com/settings/developers).
   - Obtain your GitHub OAuth credentials (Client ID and Client Secret).
   - Update the configuration in `[...nextauth].ts`.

4. **ENV configuration**

   - download env file from private repo

## Usage

Once the configuration is set up, you can start the development server with the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

---

Thank you for checking out the Amazon Clone built with Next.js! If you have any questions or feedback, please feel free to open an issue or contact the project's maintainer.
