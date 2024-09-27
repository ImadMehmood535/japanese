"use client";
import { FeatureProductImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimationButton from "../General/AnimationButton";
import { Slide } from "react-awesome-reveal";

const FeatureProductHome = () => {
  return (
    <div className="FeatureProductHome overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <Slide triggerOnce direction="left">
            <div className="image-area order-2 md:order-1">
              <Image
                src={FeatureProductImage}
                width={600}
                height={600}
                alt="jjapan"
                className="w-full max-w-[600px] h-auto"
                quality={100}
              />
            </div>
          </Slide>
          <Slide triggerOnce direction="right">
            <div className="content-area text-center md:text-left order-1 md:order-2">
              <h2 className="text-black text4xl md:text-6xl font-normal shadow1 mb-4 gang text-balance md:mb-8">
                Create your own Yokohama Box
              </h2>
              <p className="leading-normal md:leading-8 rubick text-lg md:text-xl md:mb-16">
                Embark on a culinary journey with the{" "}
                <strong>&quot;Create Your Own Yokohama Box,&quot;</strong> a
                customizable collection that brings the vibrant flavors of
                Yokohama to your doorstep. With a price range of $125-250, each
                box is a treasure trove of 17 carefully selected items, ensuring
                a delightful mix of tastes and textures. Savor the refreshing
                variety with four beverages, indulge in the savory crunch of
                five different chip varieties, treat yourself to the sweet
                allure of four types of cookies, and end on a high note with a
                quartet of candies. This box is perfect for gatherings, gifts,
                or simply enjoying a taste of Japan at home. Each Yokohama Box
                is a unique experience, inviting you to explore and enjoy a
                world of flavor.
              </p>
              <div className="flex mt-4 justify-center md:justify-start">
                <AnimationButton btntext={" View Product"} link={"/shop"} />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductHome;
