import { ShopBannerBottom, ShopBannerImage } from "@/assets";
import Image from "next/image";
import React from "react";

const ShopBanner = () => {
  return (
    <div className="ShopBanner ">
      <div className="full-sec">
        <Image
          src={ShopBannerImage}
          width={1600}
          height={800}
          className="w-full h-screen"
          unoptimized
        />
      </div>
      <div className=" py-9  bg-cover bg-left-bottom bg-no-repeat  relative image-mix-shade bg-black">
        <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-normal shadow1 mb-4 text-center gang relative z-20">
          Exclusive Snack boxes!
        </h2>
      </div>
      <Image
        src={ShopBannerBottom}
        width={1600}
        height={800}
        className="w-full h-auto"
        unoptimized
      />
    </div>
  );
};

export default ShopBanner;
