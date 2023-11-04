import React from "react";
import Product from "./Product";
import Image from "next/image";

interface Props {
  products: any;
}

const ProductFeed = ({ products }: Props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products?.slice(0, 4).map((product: any) => {
        const { id, title, price, description, category, image } = product;
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        );
      })}

      <div className="md:col-span-full">
        <Image
          width={1500}
          height={600}
          src="https://i.ibb.co/dbfYx4f/ad-banner.jpg"
          alt="ad-banner"
          priority={false}
        />
      </div>

      <div className="md:col-span-2">
        {products?.slice(4, 5).map((product: any) => {
          const { id, title, price, description, category, image } = product;
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      </div>

      {products?.slice(5, products.length).map((product: any) => {
        const { id, title, price, description, category, image } = product;
        return (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default ProductFeed;
