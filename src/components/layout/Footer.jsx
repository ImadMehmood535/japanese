"use client";
import { FooterDoor, FooterImage, FooterLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { API } from "@/api";
import { errorToast, successToast } from "@/hooks/useToast";

const Footer = () => {
  const helpmenu = [
    {
      link: "/contact-us",
      title: "Contact Us",
    },
    {
      link: "/",
      title: "Order Tracking",
    },
    {
      link: "/shipping-policy",
      title: "Shipping",
    },
    {
      link: "/refund-policy",
      title: "Returns",
    },
  ];
  const aboutmenu = [
    {
      link: "/",
      title: "Rewards Program",
    },
    {
      link: "/",
      title: "Refer a Friend",
    },
    {
      link: "/",
      title: "Affiliate Program",
    },
    {
      link: "/",
      title: "For Creators",
    },
    {
      link: "/",
      title: "Okashi News Blog",
    },
    {
      link: "/",
      title: "Reviews",
    },
  ];
  const shopmenu = [
    {
      link: "/",
      title: "Gift Cards",
    },
    {
      link: "/",
      title: "New Arrivals",
    },
    {
      link: "/",
      title: "Japan Candy Box",
    },
  ];

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("hit");
    setLoading(true);
    try {
      const response = await API.newsLetter(data);
      successToast(response?.data?.message);
      reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      errorToast(error, "Can not submit");
    }
  };

  return (
    <div className="Footer">
      <div className="footer-image-area h-[540px] md:h-[800px] bg-transparent bg-cover bg-no-repeat bg-bottom-center overflow-hidden relative flex justify-center items-end">
        <Image
          src={FooterDoor}
          width={600}
          height={400}
          quality={100}
          className="mx-auto z-10 relative w-[300px] h-[300px] md:w-[600px] md:h-auto"
        />
      </div>
      <div className="footer-inner bg-black py-9">
        <div className="container">
          <div className="flex gap-12 flex-col md:flex-row">
            <div className="w-full md:w-[30%] text-center md:text-left flex justify-center md:justify-start flex-col overflow-hidden">
              <Image
                src={FooterLogo}
                width={136}
                height={136}
                quality={100}
                unoptimized
                className="mb-10 mx-auto md:ml-0 "
              />
              <p className="text-white  rubick md:max-w-[322px] text-base">
                Begin your experience with flexible pricing plans and worldwide
                shipping!
              </p>
            </div>
            <div className="w-full md:w-[70%] text-center md:text-left">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="first-col">
                  <h3 className="text-white font-medium text-lg mb-4 rubick">
                    Help
                  </h3>
                  <ul className="list-none">
                    {helpmenu.map((item, key) => (
                      <li
                        key={key}
                        className="text-white mb-2 rubick text-base"
                      >
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="second-col">
                  <h3 className="text-white font-medium text-lg mb-4 rubick">
                    About Us
                  </h3>
                  <ul className="list-none">
                    {aboutmenu.map((item, key) => (
                      <li
                        key={key}
                        className="text-white mb-2 rubick text-base"
                      >
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="third-col">
                  <h3 className="text-white font-medium text-lg mb-4 rubick">
                    Shop
                  </h3>
                  <ul className="list-none">
                    {shopmenu.map((item, key) => (
                      <li
                        key={key}
                        className="text-white mb-2 rubick text-base"
                      >
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="forth-col">
                  <h3 className="text-white font-medium text-lg mb-4 rubick">
                    Be the first to know!
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full bg-white text-black py-3 px-6 rounded-sm focus:outline-none"
                        placeholder="Email"
                        {...register("email", {
                          required: "Please enter an email",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="error text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </span>
                      )}
                      <button
                        disabled={loading}
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        aria-label="Subscribe"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </form>
                  <p className="text-white rubick text-base">
                    ReReceive the latest news and deals!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-foter bg-black py-9">
        <div className="container">
          <p className="text-white text-center rubick text-base">
            Copyright © 2024 JJapan Import® -  Terms & Conditions - Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
