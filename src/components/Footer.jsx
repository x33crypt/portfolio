import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 60000); // Update every minute to avoid unnecessary updates

    return () => clearInterval(intervalId);
  }, []);

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    return `${formattedHours}:${minutes} ${period}`;
  }

  return (
    <div className="px-[3%] flex flex-col justify-center bg-black">
      <div className="flex justify-between items-center lg:py-[40px] py-[20px] border-t border-[rgb(94,94,94)]">
        <div className="">
          <p className="lg:text-[14px] text-[14px] text-white font-semibold">
            LUKMAN ADELEKE
          </p>
        </div>
        <div className="lg:hidden flex">
          <p className="lg:text-[14px] text-[14px] text-[rgb(88,88,88)] font-[500]">
            &#169; {currentYear}
          </p>
        </div>
        <div className="lg:flex hidden justify-center  bg-[rgb(30,30,30)] px-[20px] py-[15px] rounded-[8px]">
          <div className="flex justify-between mr-[20px] items-center">
            <i className="fa-regular fa-clock fa-spin-pulse mr-[10px] text-[rgb(144,255,0)] lg:text-[12px] text-[11px]"></i>
            <p className="lg:text-[14px] text-[13px] font-[600] text-[rgb(171,171,171)]">
              {time}
            </p>
          </div>
          <p className="text-white lg:text-[14px] text-[13px]">
            Lagos Nigeria, NG
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
