import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

interface Props {
  products: any;
}

export default function Home({ products }: Readonly<Props>) {
  return (
    <div className="bg-[#E3E6E6]">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />

        {/* product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
