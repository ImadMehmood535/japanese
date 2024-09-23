import { MissonBg } from "@/assets";
import Image from "next/image";
import React from "react";

const MissonArea = () => {
  return (
    <div className="MissonArea mb-28">
      <div className="">
        <Image
          src={MissonBg}
          width={1600}
          height={400}
          quality={100}
          className="w-full h-auto"
          unoptimized
          alt="Footer Image"
        />
      </div>
      <div className="container">
        <div className="conten-area shadow-2xl rounded-3xl text-center py-12 px-10 -mt-[160px] z-20 relative bg-white">
          <h2 className="text-[#6C2000] text-2xl font-medium mb-4  rubick  md:mb-8">
            Mission
          </h2>
          <p className="leading-normal md:leading-8 rubick text-lg md:text-xl ">
            We’re not just a snack company. We’re here to spread the joy of
            Japanese culture, create excitement, and share unforgettable
            experiences with our community. Our founder's passion fuels
            everything we do, and our goal is to ignite that same passion in
            you—whether it's through the amazing flavors of Japan or the thrill
            of a custom car giveaway.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissonArea;
