"use client";
import {
  facebook,
  insta,
  linkedinicon,
  tiktok,
  twittericon,
  youtube,
} from "@/assets";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const ContactFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("firstName", { required: true })}
            className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
            placeholder="First name"
          />
          <input
            {...register("lastName", { required: true })}
            className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
            placeholder="Last name"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
            placeholder="Email address"
          />
          <input
            {...register("phone", { required: true })}
            className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white"
            placeholder="Phone number"
          />
        </div>
        <textarea
          {...register("message", { required: true })}
          className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white h-32"
          placeholder="Message"
        />
        <button
          type="submit"
          className="w-full bg-themeSecondary-0 text-white py-2 px-4 rounded-lg hover:bg-black transition duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
      <div className="flex items-center flex-row justify-start space-x-4 mt-4">
        <p className="text-black text-sm">Follow US:</p>
        <ul className="list-none flex flex-row gap-3">
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={twittericon} width={22} height={22} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={linkedinicon} width={22} height={22} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={insta} width={22} height={22} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={youtube} width={22} height={22} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={facebook} width={22} height={22} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="/" target="_black" className="text-black">
              <Image src={tiktok} width={22} height={22} alt="twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactFormComponent;
