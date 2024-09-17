"use client";
import { FooterImage, FooterLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const helpmenu = [
    {
      link: "/",
      title: "Contact Us",
    },
    {
      link: "/",
      title: "Order Tracking",
    },
    {
      link: "/",
      title: "Shipping",
    },
    {
      link: "/",
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Footer">
      <Image
        src={FooterImage}
        width={1600}  
        height={800}
        quality={100}
        className="w-full h-auto"
        unoptimized  
        alt="Footer Image"
      />
      <div className="footer-inner bg-black py-9">
        <div className="container">
          <div className="flex gap-12">
            <div className="w-full md:w-[30%]">
              <Image
                src={FooterLogo}
                width={136}
                height={136}
                quality={100}
                className="mb-10"
              />
              <p className="text-white text-balance">
                Begin your experience with flexible pricing plans and worldwide
                shipping!
              </p>
            </div>
            <div className="w-full md:w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="first-col">
                  <h3 className="text-white font-medium text-2xl mb-4">Help</h3>
                  <ul className="list-none">
                    {helpmenu.map((item, key) => (
                      <li key={key} className="text-white mb-2">
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="second-col">
                  <h3 className="text-white font-medium text-2xl mb-4">
                    About Us
                  </h3>
                  <ul className="list-none">
                    {aboutmenu.map((item, key) => (
                      <li key={key} className="text-white mb-2">
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="third-col">
                  <h3 className="text-white font-medium text-2xl mb-4">Shop</h3>
                  <ul className="list-none">
                    {shopmenu.map((item, key) => (
                      <li key={key} className="text-white mb-2">
                        <Link href={item.link} className="font-normal">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="forth-col">
                  <h3 className="text-white font-medium text-2xl mb-4">
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
                      <button
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
                  <p className="text-lg text-white">
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
          <p className="text-white text-center">
            Copyright © 2024 JJapan Import® -  Terms & Conditions - Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
