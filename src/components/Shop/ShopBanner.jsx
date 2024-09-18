import { ShopBannerBottom, ShopBannerImage } from "@/assets";
import Image from "next/image";
import React from "react";

const ShopBanner = () => {
  return (
    <div className="ShopBanner bg-black">
      <div className="full-sec">
        <Image
          src={ShopBannerImage}
          width={1600}
          height={800}
          className="w-full h-screen"
          unoptimized
        />
      </div>
      <div
        className=" pt-9 pb-20 md:min-h-[600px] bg-cover bg-left-bottom bg-no-repeat "
        style={{
          backgroundImage: `url(${ShopBannerBottom.src})`,
        }}
      >
        <h2 className="text-white text-5xl font-bold shadow1 mb-4 text-center">
          Exclusive Snack boxes!
        </h2>
      </div>
    </div>
  );
};

export default ShopBanner;
