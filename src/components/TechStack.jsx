import React, { useState } from "react";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import service1 from "./../assets/keyservice1.webp";
import service2 from "./../assets/keyservice2.webp";
import service3 from "./../assets/keyservice3.jpeg";
import service4 from "./../assets/keyservice4.webp";
import service5 from "./../assets/keyservice5.webp";

const TechStack = () => {
  const [isService1, setService1] = useState(false);
  const [isService2, setService2] = useState(false);
  const [isService3, setService3] = useState(false);
  const [isService4, setService4] = useState(false);
  const [isService5, setService5] = useState(false);

  return (
    <div className="pt-[80px]  flex flex-col justify-center bg-black">
      <div className="px-[3%] flex lg:flex-row flex-col justify-between lg:items-center">
        <p className="text-white lg:text-[47px] text-[42px] w-[230px] lg:leading-[60px] leading-[50px]">
          KEY SERVICES
        </p>
        <p className="mt-[15px] text-[rgb(88,88,88)] lg:text-[16px] text-[15px] lg:w-[480px] max-w-[580px]  leading-[25px]">
          "Here’s an overview of the key services I offer as a developer. From
          crafting responsive and visually appealing interfaces to building
          robust back-end systems, I ensure seamless functionality, exceptional
          performance, and solutions tailored to meet your unique needs."
        </p>
      </div>
      <div className="mt-[30px]">
        <div className="flex lg:flex-row flex-col">
          <div className="flex-1 flex flex-col relative border border-l-0 border-r-0 lg:border-r border-[rgb(94,94,94)]">
            <div className="z-10 absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0"></div>
            <div
              onMouseEnter={() => setService1(true)}
              onMouseLeave={() => setService1(false)}
              className={` ${
                isService1 ? null : "bg-[rgba(0,0,0)]"
              }  z-20 absolute  top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <img
              className="lg:h-[360px] h-[220px] w-full object-cover "
              src={service1}
              alt=""
            />
            <p className="z-30 absolute lg:bottom-[30px] bottom-[20px] lg:left-[40px] left-[15px] lg:text-[32px] text-[28px] text-white w-[200px] font-[300] leading-[40px]">
              Web Development
            </p>
          </div>
          <div className=" lg:w-[550px] relative border border-l-0 border-r-0 lg:border-r border-t-0 lg:border-t border-[rgb(94,94,94)]">
            <div
              onMouseEnter={() => setService2(true)}
              onMouseLeave={() => setService2(false)}
              className={` ${
                isService2 ? null : "bg-[rgba(0,0,0)]"
              }  z-20 absolute  top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <div className="z-10 absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0"></div>
            <img
              className="lg:h-[360px] h-[220px] w-full object-cover "
              src={service2}
              alt=""
            />
            <p className="z-30 absolute lg:bottom-[30px] bottom-[20px] lg:left-[40px] left-[15px] lg:text-[32px] text-[28px] text-white w-[200px] font-[300] leading-[40px]">
              Full-Stack Application
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[400px] relative border border-l-0 border-t-0 border-r-0 lg:border-r border-[rgb(94,94,94)] ">
            <div
              onMouseEnter={() => setService3(true)}
              onMouseLeave={() => setService3(false)}
              className={` ${
                isService3 ? null : "bg-[rgba(0,0,0)]"
              }  z-20 absolute  top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <div className="z-10 absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0"></div>
            <img
              className="lg:h-[360px] h-[220px] w-full object-cover "
              src={service3}
              alt=""
            />
            <p className="z-30 absolute lg:bottom-[30px] bottom-[20px] lg:left-[40px] left-[15px] lg:text-[32px] text-[28px] text-white w-[200px] font-[300] leading-[35px]">
              E-Commerce Solutions
            </p>
          </div>
          <div className="flex-1 relative border border-l-0 border-t-0 border-r-0 lg:border-r border-[rgb(94,94,94)]">
            <div
              onMouseEnter={() => setService4(true)}
              onMouseLeave={() => setService4(false)}
              className={` ${
                isService4 ? null : "bg-[rgba(0,0,0)]"
              }  z-20 absolute  top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <div className="z-10 absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0"></div>
            <img
              className="lg:h-[360px] h-[220px] w-full object-cover object-top"
              src={service4}
              alt=""
            />
            <p className="z-30 absolute lg:bottom-[30px] bottom-[20px] lg:left-[40px] left-[15px] lg:text-[32px] text-[28px] text-white w-[200px] font-[300] leading-[35px]">
              API Integration
            </p>
          </div>
          <div className="lg:w-[400px] relative border border-l-0 border-t-0 border-r-0 lg:border-r border-[rgb(94,94,94)]">
            <div
              onMouseEnter={() => setService5(true)}
              onMouseLeave={() => setService5(false)}
              className={` ${
                isService5 ? null : "bg-[rgba(0,0,0)]"
              }  z-20 absolute  top-0 bottom-0 left-0 right-0 transition-all duration-500`}
            ></div>
            <div className="z-10 absolute bg-[rgba(0,0,0,0.4)] top-0 bottom-0 left-0 right-0"></div>
            <img
              className=" lg:h-[360px] h-[250px] w-full object-cover "
              src={service5}
              alt=""
            />
            <p className="z-30 absolute lg:bottom-[30px] bottom-[20px] lg:left-[40px] left-[15px] lg:text-[32px] text-[28px] text-white w-[300px] font-[200] leading-[35px]">
              Performance Optimization & SEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
