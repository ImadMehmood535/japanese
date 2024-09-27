"use client";
import { BannerImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimationButton from "../General/AnimationButton";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div
      className="Banner bg-cover bg-center bg-no-repeat h-screen md:h-[120vh]  flex justify-center items-end pb-[5%] relative  "
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}
    >
      <Slide triggerOnce direction="down" delay={500}>
        <div className="container  text-center ">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl mb-8 font-medium gang shadow1">
            Exclusive Giveaways Galore!
          </h1>
          <div className="button-wrapper flex items-center gap-4 justify-center flex-col md:flex-row">
            <AnimationButton btntext={"Learn More"} link={"/"} />

            <Link
              href={"/snakes-box"}
              className="rubick group text-black py-3 px-12 bg-white   rounded-sm flex flex-row gap-2 items-center transition-all duration-700 w-auto font-medium text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Banner;
