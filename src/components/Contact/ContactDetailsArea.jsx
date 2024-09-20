import Link from "next/link";
import React from "react";
import ContactFormComponent from "./ContactFormComponent";
import Image from "next/image";
import { clockicon, emailicon, locationicon, phoneicon } from "@/assets";

const ContactDetailsArea = () => {
  return (
    <div className="ContactDetailsArea  ">
      <div className="py-10 md:py-16 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-9">
          <div className="icon-box text-center">
            <Link
              href={"mailto:support@80eighty.com"}
              className="flex flex-col justify-center items-center"
            >
              <Image src={emailicon} width={100} height={100} alt="mail" />

              <p className="text-lg text-black">support@80eighty.com</p>
            </Link>
          </div>
          <div className="icon-box text-center">
            <Link
              href={"tel:3853504041"}
              className="flex flex-col justify-center items-center"
            >
              <Image src={phoneicon} width={100} height={100} alt="mail" />

              <p className="text-lg text-black">(385) 350-4041</p>
            </Link>
          </div>
          <div className="icon-box text-center">
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center"
            >
              <Image src={clockicon} width={100} height={100} alt="mail" />

              <p className="text-lg text-black">
                Mon - Fri: <br /> 8:00AM - 4:30PM
              </p>
            </Link>
          </div>
          <div className="icon-box text-center">
            <Link
              href={"https://maps.app.goo.gl/pcwuvh3CZZbMsXdX9"}
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <Image src={locationicon} width={100} height={100} alt="mail" />

              <p className="text-lg text-black">
                14420 S. 974 W.  #3 Bluffdale, UT 84065
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="form-area mt-10">
        <ContactFormComponent />
      </div>
    </div>
  );
};

export default ContactDetailsArea;
