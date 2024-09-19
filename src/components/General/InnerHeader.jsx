import { InnerHeaderBanner } from "@/assets";
import React from "react";

const InnerHeader = ({pageTitle}) => {
  return (
    <div
      className="InnerHeader bg-cover bg-center bg-no-repeat py-[100px] md:py-[180px]"
      style={{
        backgroundImage: `url(${InnerHeaderBanner.src})`,
      }}
    >
      <h2 className="text-black text-4xl md:text-6xl font-normal shadow1 mb-10 md:mb-16 text-center gang">
        {pageTitle}
      </h2>
    </div>
  );
};

export default InnerHeader;
