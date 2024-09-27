import Link from "next/link";
import React from "react";

const AnimationButton = ({ btntext, link }) => {
  return (
    <Link
      href={link}
      className="rubick group text-white py-3 px-8 bg-themeSecondary-0 rounded-sm flex flex-row gap-2 items-center transition-all duration-700 ease-in-out w-auto font-medium text-base transform group-hover:scale-105 group-hover:w-[220px]" // Adjust width on hover
    >
      {btntext}
      <span className=" w-0 group-hover:w-[auto] translate-x-[-100px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
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
  );
};

export default AnimationButton;
