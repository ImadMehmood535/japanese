"use client";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-9-31 ");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure component renders only on the client
    setTimeLeft(calculateTimeLeft()); // Calculate time after component is mounted

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    return num?.toString().padStart(2, "0");
  };

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="flex justify-center items-center space-x-4 flex-col md:flex-row md:gap-9">
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <React.Fragment key={unit}>
          <div className="text-center !ml-0 md:ml:2">
            <div className="relative">
              <div className="text-4xl md:text-6xl lg:text-8xl font-normal text-red-600 gang">
                {formatNumber(timeLeft[unit] || 0)}
              </div>
            </div>
            <div className="text-lg md:text-2xl mt-2 font-normal rubick">{unit.toUpperCase()}</div>
          </div>
          {index < 3 && (
            <div className="text-4xl font-bold text-gray-400 !ml-0 md:ml-2 md:mb-6">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;
