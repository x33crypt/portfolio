import React, { useState, useEffect } from "react";

const Nav = () => {
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

  const scrollToSection = () => {
    const section = document.getElementById("footer");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-50 flex lg:flex-row flex-col justify-between items-center py-[18px] px-[3%] fixed right-0 left-0 bg-black">
      <div className="hidden lg:flex items-center gap-[20px]">
        <p className="text-white font-semibold">#0x33crypt</p>
        <p className="text-white font-semibold">#WebPro</p>
      </div>

      <div className=" flex justify-center items-center w-full">
        <div className="flex justify-center  bg-[rgb(30,30,30)] px-[20px] py-[15px] rounded-[8px]">
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

      <div className="flex w-full lg:w-min justify-between items-center mt-[15px] lg:mt-0">
        <div className="flex lg:hidden gap-[20px]">
          <p className="text-white font-semibold">#0x33crypt</p>
          <p className="text-white font-semibold">#WebPro</p>
        </div>
        <div className="w-max">
          <a className="" href="mailto:adeleke21l4l@gmail.com">
            <button className="lg:px-[20px] px-[10px] lg:py-[10px] py-[10px] font-[500] lg:text-[14px] text-[13px]  border border-[rgb(94,94,94)] bg-transparent text-white cursor-pointer hover:bg-[rgb(144,255,0)] hover:text-black transition-all duration-300">
              SEND AN EMAIL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
