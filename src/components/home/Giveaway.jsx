import { Timer } from "@/assets";
import Image from "next/image";
import React from "react";
import Countdown from "../General/Countdown";

const Giveaway = () => {
  return (
    <div className="Giveaway">
      <Image
        src={Timer}
        width={1600}
        height={800}
        alt="jjapan"
        unoptimized
        className="w-full h-auto"
      />
      <div className=" bg-gradient-to-b from-[#F2E8E7] from-10% via-[#F2E8E7] via-30% to-[#FFFFFF] to-90% pt-5 pb-24">
        <div className="container text-center">
          <h2 className="text-black text-4xl   md:text-6xl font-normal shadow1 mb-10 md:mb-16 lg:mb-20 gang">
            GIVEAWAY ENDS IN:
          </h2>
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Giveaway;
