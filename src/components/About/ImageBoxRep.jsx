import Image from "next/image";
import React from "react";

const ImageBoxRep = ({ data }) => {
  return (
    <div className="ImageBoxRep py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col gap-10">
          {data.map((item, index) => {
            const isEven = index % 2 === 0; // Check if index is even
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
               
                <div
                  className={`image-area ${
                    isEven ? "md:order-2  " : "order-1 md:order-2"
                  }`}
                >
                  <Image
                    src={item.image}
                    width={600}
                    height={600}
                    alt="jjapan"
                    className="w-full max-w-[600px] h-auto"
                    quality={100}
                  />
                </div>

                <div
                  className={`content-area text-center md:text-left ${
                    isEven ? "order-1 md:order-2" : "order-2 md:order-1"
                  }`}
                >
                  <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-4 gang text-balance md:mb-8">
                    {item.title}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.text }}
                    className="leading-normal md:leading-8 rubick text-lg md:text-xl md:mb-16"
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageBoxRep;
