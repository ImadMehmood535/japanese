import { giftboxicon, Shippingicon, Snaksicon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimationButton from "../General/AnimationButton";

const WhyImportant = () => {
  return (
    <div className="WhyImportant py-28 md:py-32">
      <div className="container text-center">
        <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-4 gang">
          Why Jjapan Import?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 mt-16 md:mt-20 mb-10">
          <div className="icon-box ">
            <div className="image-wrapper flex justify-center mb-8">
              <Image
                src={giftboxicon}
                width={120}
                height={120}
                alt="Snack box"
              />
            </div>
            <div className="content-area">
              <h3 className="text-black font-medium text-xl md:text-2xl mb-2 rubick">
                Snack box subscription
              </h3>
              <p className="text-black text-lg font-normal rubick ">
                Begin your experience with flexible pricing plans and worldwide
                shipping!
              </p>
            </div>
          </div>
          <div className="icon-box">
            <div className="image-wrapper flex justify-center mb-8">
              <Image
                src={Snaksicon}
                width={120}
                height={120}
                alt="Monthly snack"
              />
            </div>
            <div className="content-area">
              <h3 className="text-black font-medium text-xl md:text-2xl mb-2 rubick">
                Monthly snack themes
              </h3>
              <p className="text-black text-lg font-normal rubick ">
                Get Japan-exclusive snacks handpicked for a tastebud adventure!
              </p>
            </div>
          </div>
          <div className="icon-box">
            <div className="image-wrapper flex justify-center mb-8">
              <Image
                src={Shippingicon}
                width={120}
                height={120}
                alt="Monthly snack h-[150px]"
              />
            </div>
            <div className="content-area">
              <h3 className="text-black font-medium text-xl md:text-2xl mb-2 rubick">
                From Japan to your door!
              </h3>
              <p className="text-black text-lg font-normal rubick ">
                Explore Japanese culture by diving into unique snacks
              </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center ">
          <AnimationButton btntext={"Subscribe Now"} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default WhyImportant;
