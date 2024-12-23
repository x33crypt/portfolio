import React from "react";
import image from "./../assets/image-2.png";

const Hero = () => {
  return (
    <div className="bg-black px-[3%] pt-[170px] lg:py-0 flex flex-1 lg:flex-row flex-col lg:h-[600px] justify-between items-center">
      <div className=" z-10 flex flex-col justify-center items-center ">
        <p className="mt-[20px] text-center lg:text-[140px] md:text-[120px] text-[80px] text-white font-[Tiny5] lg:leading-[110px] md:leading-[90px] leading-[70px]">
          LUKMAN ADELEKE
        </p>
        <p className="mt-[20px] text-[rgb(111,111,111)] lg:text-[16px] text-[15px] text-center lg:w-[512px] max-w-[580px]">
          A full-stack developer passionate about building responsive, dynamic,
          and user-friendly web applications, with expertise across front-end
          and back-end technologies.
        </p>
      </div>
      <div className=" lg:mt-0 mt-[150px] flex justify-center items-center w-full">
        <img
          className=" lg:w-[440px] md:w-[200px] w-[130px]"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
