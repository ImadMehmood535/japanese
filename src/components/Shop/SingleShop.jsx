"use client";
import useProductStore from "@/store/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPaperPlane } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

const SingleShop = ({ product }) => {
  const { addToCart } = useProductStore();
  const reviews = [
    {
      name: "Casey Morgan",
      date: "7 days ago",
      rating: 5,
      comment: "Amazing and original",
    },
    { name: "Sam Ellis", date: "2 days ago", rating: 5, comment: "" },
  ];

  return (
    <div className="SingleShop relative z-10 bg-gradient-to-b from-[#DCDBD7] via-[#dcdbd76b] via-30% to-{#DCDBD7]">
      <div className="container">
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-6 md:gap-16  items-start">
          <div className="w-full md:w-[50] image-area lg:sticky top-32">
            <Image
              src={product.imageUrl}
              width={1600}
              height={800}
              quality={100}
              className="w-full h-auto"
              unoptimized
              alt="Product banner"
            />
          </div>
          <div className="w-full md:w-[50] content-area py-6 flex flex-col gap-8 md:gap-16">
            <h2 className="text-black text-4xl md:text-6xl font-normal shadow1   text-center md:text-left gang">
              {product.name}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center  ">
              <h3 className="text-themeSecondary-0 font-medium text-2xl md:text-4xl  rubick text-center md:text-left">
                {product.price}
              </h3>
              <p className="text-black rubick text-2xl font-normal flex flex-row gap-2 items-center justify-center">
                <IoPaperPlane className="text-[#ED1B24]" /> {product.entries}{" "}
                Entries
              </p>
            </div>
            <div className="flex">
              <Link
                href={"/cart"}
                onClick={() => addToCart(product)}
                className=" rubick group  text-white py-4 px-12 bg-themeSecondary-0  rounded-sm flex flex-row gap-2 items-center transition-all duration-700 w-auto font-medium text-base uppercase"
              >
                Add to Cart
                <span className="-translate-x-[100px] group-hover:translate-x-0 hidden group-hover:block transition-all duratioduration-300">
                  <svg
                    width="60"
                    height="18"
                    viewBox="0 0 60 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.6914 9.94043L0.931641 9.90527C0.814453 9.90527 0.697266 9.87891 0.580078 9.82617C0.462891 9.77344 0.363281 9.70605 0.28125 9.62402C0.1875 9.53027 0.117188 9.42773 0.0703125 9.31641C0.0234375 9.20508 0 9.08496 0 8.95605C0 8.83887 0.0234375 8.72168 0.0703125 8.60449C0.117188 8.4873 0.1875 8.38184 0.28125 8.28809C0.363281 8.20605 0.462891 8.1416 0.580078 8.09473C0.697266 8.04785 0.814453 8.02441 0.931641 8.02441L48.6914 8.05957C48.8086 8.05957 48.9258 8.08301 49.043 8.12988C49.1602 8.17676 49.2598 8.24707 49.3418 8.34082C49.4355 8.42285 49.5059 8.52246 49.5527 8.63965C49.5996 8.75684 49.623 8.87402 49.623 8.99121C49.623 9.12012 49.5996 9.24316 49.5527 9.36035C49.5059 9.47754 49.4355 9.57715 49.3418 9.65918C49.2598 9.75293 49.1602 9.82324 49.043 9.87012C48.9258 9.91699 48.8086 9.94043 48.6914 9.94043ZM59.9941 9.00879C58.6699 9.50098 57.2812 10.0752 55.8281 10.7314C54.375 11.3877 52.9395 12.0996 51.5215 12.8672C50.1035 13.6348 48.75 14.4463 47.4609 15.3018C46.1602 16.1572 44.9941 17.0303 43.9629 17.9209L47.1973 8.99121L43.9805 0.0791016C45 0.969727 46.1602 1.84277 47.4609 2.69824C48.7617 3.55371 50.1182 4.36816 51.5303 5.1416C52.9424 5.91504 54.375 6.62988 55.8281 7.28613C57.2812 7.94238 58.6699 8.5166 59.9941 9.00879Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="accordian">
              <div className="w-full flex flex-col join-item gap-4 faq-area   ">
                {/* <div className="w-full flex   join join-vertical border-none border-0 "> */}
                <div className="collapse collapse-arrow join-item border-base-300 border-b-2 rounded-none ">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title  font-medium">
                    <h4 className="uppercase text-black rubick text-4xl">
                      Description
                    </h4>
                  </div>
                  <div className="collapse-content  ">
                    <p
                      className="rubick text-lg"
                      dangerouslySetInnerHTML={{
                        __html: product.shortDescription,
                      }}
                    />
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border-b-2 rounded-none ">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title  font-medium">
                    <h4 className="uppercase text-black rubick text-4xl">
                      Product Details
                    </h4>
                  </div>
                  <div className="collapse-content  ">
                    <ul className="ze-list list-none">
                      {product?.productDetails?.map((item, key) => (
                        <li className="flex items-start  gap-4 mb-4" key={key}>
                          <IoCheckmarkDone className="text-themeSecondary-0 text-2xl" />
                          <div className="w-[80%]">
                            <p className="text-black font-normal text-lg md:text-xl">
                              {item.name}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p
                      className="rubick text-lg"
                      dangerouslySetInnerHTML={{
                        __html: product.longDescription,
                      }}
                    />
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border-b-2 rounded-none">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-medium">
                    <h4 className="uppercase text-black rubick text-4xl">
                      Reviews
                    </h4>
                  </div>
                  <div className="collapse-content relative">
                    <div className="w-full max-h-[250px] overflow-y-scroll pr-4">
                      <div className="flex  mb-4 justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-xl font-bold mr-1">4.5</span>
                          <span className="text-gray-500 mr-1">/5</span>
                          <IoMdStar className="w-5 h-5 text-yellow-400 fill-current" />
                        </div>
                        <span className="text-gray-500 ml-2">
                          {reviews.length} Reviews
                        </span>
                      </div>

                      <div className="flex mb-4 overflow-x-auto">
                        {[1, 2, 3].map((_, index) => (
                          <div
                            key={index}
                            className="w-16 h-16 bg-gray-200 mr-2 flex-shrink-0"
                          >
                            <img
                              src="/api/placeholder/64/64"
                              alt="Product"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-16 h-16 bg-gray-800 flex items-center justify-center text-white">
                          See All
                        </div>
                      </div>

                      <div className="space-y-4">
                        {reviews.map((review, index) => (
                          <div key={index} className="border-b pb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold">
                                {review.name}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {review.date}
                              </span>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <IoMdStar
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            {review.comment && (
                              <p className="text-gray-700">{review.comment}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
