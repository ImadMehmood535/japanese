"use client";
import { CarList, SamuraiFull } from "@/assets";
import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

const FeatureListArea = () => {
  const listpoints = [
    {
      text: "Visit the JJapan Import website and browse the selection of snakes available for import.",
    },
    {
      text: "Choose the snake(s) you wish to purchase and complete the buying process through the website.",
    },
    {
      text: "Upon completion of your purchase, you will be automatically entered into the giveaway.",
    },
    {
      text: "Ensure that your contact information is accurate and up-to-date during checkout to receive notification if you win.",
    },
    {
      text: "The giveaway entry is tied to each purchase, so multiple purchases increase your chances of winning.",
    },
    {
      text: "Stay tuned to the JJapan Import website or their official social media channels for the announcement of the giveaway winner.",
    },
  ];
  return (
    <div className="FeatureListArea overflow-hidden">
      <Slide triggerOnce direction="up">
        <Image
          src={SamuraiFull}
          width={800}
          height={600}
          quality={100}
          alt="jjapan"
          unoptimized
          className="w-full h-auto"
        />
      </Slide>
      <div className="py-[50px] md:py-[100px] Featuredevider bg-black relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Slide triggerOnce direction="up" >
              <div className="points-area flex flex-col gap-5">
                <h2 className="text-white text-4xl md:text-6xl font-normal shadow1 mb-4 gang">
                  HOW TO ENTER
                </h2>
                <p className="text-white font-normal text-lg  md:mb-6">
                  To enter the giveaway at JJapan Import, please follow these
                  steps:
                </p>
                <ul className="ze-list list-none">
                  {listpoints.map((item, key) => (
                    <li className="flex items-start  gap-4 mb-4" key={key}>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="25" height="25" rx="12" fill="white" />
                        <path
                          d="M9.9343 18.0146L4.7343 12.8146C4.4219 12.5022 4.4219 11.9957 4.7343 11.6832L5.13413 11.2834C5.44654 10.9709 6.18759 10.9709 6.5 11.2834L10.5 15.2834L19 6.83237C19.3124 6.51997 19.6024 7.18759 19.9149 7.5L20.2657 7.68323C20.5781 7.99564 20.5781 8.50217 20.2657 8.81461L11.0657 18.0146C10.7532 18.327 10.2467 18.327 9.9343 18.0146Z"
                          fill="#ED1B24"
                        />
                      </svg>
                      <div className="w-[80%]">
                        <p className="text-white font-normal text-lg ">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-white font-normal text-lg ">
                  Please note that terms and conditions may apply, and it&apos;s
                  important to read them carefully before entering the giveaway.
                  Good luck!
                </p>
              </div>
            </Slide>
            <Slide triggerOnce direction="right" delay={500}>
              <div className="image-area flex justify-end">
                <Image
                  src={CarList}
                  width={400}
                  height={800}
                  className="h-full w-auto"
                  alt="jjapan"
                />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureListArea;
