import React from "react";

const Contact = () => {
  return (
    <div
      className="px-[3%] lg:py-[130px] py-[100px] flex flex-col justify-center bg-black gap-[50px]  "
      id="footer"
    >
      <div className="flex flex-col justify-center items-center gap-[15px]">
        <p className="text-[rgb(88,88,88)] lg:text-[80px] text-[30px] font-[300] text-center w-[350px] sm:w-full lg:leading-[85px] leading-[40px]">
          FOR YOUR WORKS AND COLLABORATION
        </p>
        <a className="" href="mailto:adeleke21l4l@gmail.com">
          <small className=" lg:text-[80px] text-[30px] text-[rgb(144,255,0)] font-[500] underline">
            adeleke21l4l@gmail.com
          </small>
        </a>
      </div>
      <div className="flex justify-center items-center gap-[25px]">
        <a href="https://x.com/0x33crypt">
          <div className="flex bg-[rgb(30,30,30)] lg:px-[15px] px-[10px] lg:py-[12px] py-[9px] rounded-[4px]">
            <i className="fa-brands fa-x-twitter lg:text-[30px] text-[20px] text-white hover:text-[rgb(144,255,0)]"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/0x33crypt">
          <div className="flex bg-[rgb(30,30,30)] lg:px-[15px] px-[10px] lg:py-[12px] py-[9px] rounded-[4px]">
            <i className="fa-brands fa-instagram lg:text-[30px] text-[20px] text-white hover:text-[rgb(144,255,0)]"></i>
          </div>
        </a>
        <a href="https://github.com/x33crypt">
          <div className="flex bg-[rgb(30,30,30)] lg:px-[15px] px-[10px] lg:py-[12px] py-[9px] rounded-[4px]">
            <i className="fa-brands fa-github lg:text-[30px] text-[20px] text-white hover:text-[rgb(144,255,0)]"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
