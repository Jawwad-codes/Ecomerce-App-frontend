/** @format */

import { useEffect, useState } from "react";

const CountDown = () => {
  const [secondsLeft, setSecondsLeft] = useState(
    4 * 24 * 60 * 60 + 13 * 3600 + 34 * 60 + 56
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const timeBox = (value, label) => (
    <div className="bg-gray-500 text-white text-center px-3 py-2 rounded mx-1">
      <div className="text-lg font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-xs">{label}</div>
    </div>
  );

  return (
    <div className="flex ">
      {timeBox(days, "Days")}
      {timeBox(hours, "Hour")}
      {timeBox(minutes, "Min")}
      {timeBox(seconds, "Sec")}
    </div>
  );
};

export default CountDown;
