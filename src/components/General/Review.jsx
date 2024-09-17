"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCart from "./ReviewCart";

const Review = ({ fetureimage, data }) => {
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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <SwiperSlide key={key}>
            <ReviewCart review={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
