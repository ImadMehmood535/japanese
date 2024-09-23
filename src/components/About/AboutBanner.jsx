import { AboutBannerImage, ShopBannerBottom } from "@/assets";
import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="AboutBanner relative ">
      <div className="full-sec">
        <Image
          src={AboutBannerImage}
          width={1600}
          height={800}
          className="w-full h-screen"
          unoptimized
        />
      </div>
      <div className=" py-9 md:pb-14  bg-cover bg-left-bottom bg-no-repeat  relative image-mix-shade bg-black">
        <div className="content-area max-w-5xl mx-auto text-balance">
          <h2 className="text-white text-4xl md:text-5xl   font-normal shadow1 mb-4 text-center gang relative z-20">
            Welcome to JJapan Giveaways, where Japanese culture and car passion
            collide!
          </h2>
          <p className="text-center text-white text-lg ">
            Founded by a car enthusiast with an undeniable love for all things
            Japan, our mission is simple: to share the excitement, flavors, and
            lifestyle that make Japanese culture so special. From the streets of
            Tokyo, we&quot;re bringing you the best authentic Japanese snacks and
            exclusive chances to win custom-mod cars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
