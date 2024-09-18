"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCart from "./ReviewCart";

const Review = ({ fetureimage, reviewslider1, reviewslider2 }) => {
  return (
    <div className="Review">
      <Image
        src={fetureimage}
        width={1600}
        height={800}
        quality={100}
        className="w-full h-auto"
        unoptimized
        alt="Footer Image"
      />
      <h2 className="text-black text-5xl font-bold shadow1 mb-10 text-center">
        Our snack squad speaks!
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mb-6"
      >
        {reviewslider1.map((item, key) => (
          <SwiperSlide key={key}>
            <ReviewCart review={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {reviewslider2.map((item, key) => (
          <SwiperSlide key={key}>
            <ReviewCart review={item} flip={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
