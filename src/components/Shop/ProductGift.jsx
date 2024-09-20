import { ProductGiftImage } from "@/assets";
import Image from "next/image";
import React from "react";

const ProductGift = () => {
  return (
    <div className="ProductGift px-[5%] py-8 md:py-16">
      <Image
        src={ProductGiftImage}
        width={1600}
        height={800}
        quality={100}
        className="w-full h-auto rounded-[20px] md:rounded-[40px] lg:rounded-[60px] shadow-xl"
        unoptimized
        alt="Footer Image"
      />
    </div>
  );
};

export default ProductGift;
