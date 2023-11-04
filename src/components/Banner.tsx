import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="https://i.ibb.co/QcyKwX2/0504-AMZN-GNBC-Gateway-Hero-1500x600-v5-CB669739807.jpg"
            alt=""
            width={1500}
            height={600}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://i.ibb.co/ZSPyYrs/UGRR-S1-GWBleeding-Hero-ENG-COVIDUPDATE-XSite-1500-X600-PV-en-GB-CB669781769.jpg"
            alt=""
            width={1500}
            height={600}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://i.ibb.co/sgLTBxx/UK-EN-030821-Spring-Sitewide-ACQ-GW-Hero-D-1500x600-CV69-CB656397523.jpg"
            alt=""
            width={1500}
            height={600}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
