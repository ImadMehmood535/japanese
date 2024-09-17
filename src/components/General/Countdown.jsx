"use client"
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-31T00:00:00');
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex justify-center items-center space-x-4 ">
      {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
        <React.Fragment key={unit}>
          <div className="text-center">
            <div className="relative ">
              <div className="text-6xl font-bold text-red-600 shadow1">
                {formatNumber(timeLeft[unit] || 0)}
              </div>
           
            </div>
            <div className="text-base mt-2 font-bold">{unit.toUpperCase()}</div>
          </div>
          {index < 3 && <div className="text-4xl font-bold text-gray-400">:</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Countdown;