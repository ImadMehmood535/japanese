import { ProductBanner } from "@/assets";
import Image from "next/image";
import React from "react";

const SingleProductBanner = () => {
  return (
    <div className="product-banner h-[80vh] relative">
      <div className="h-[100%]">
        <Image
          src={ProductBanner}
          width={1600}
          height={800}
          quality={100}
          className="w-auto h-full object-cover"
          unoptimized
          alt="Product banner"
        />
      </div>
    </div>
  );
};

export default SingleProductBanner;
