import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import service5 from "./../assets/keyservice4.webp";

const Featured = () => {
  const smoothScrollTo = async (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate the target position
      const headerOffset = 100; // Adjust this to the height of your header
      const targetPosition = targetElement.offsetTop - headerOffset; // Use offsetTop for better accuracy
      const startPosition = window.pageYOffset; // Current scroll position
      const distance = targetPosition - startPosition; // Distance to scroll
      const duration = 1000; // Duration of the scroll in milliseconds
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't exceed 1
        const easing = easeInOutQuad(progress); // Easing function for smooth effect

        window.scrollTo(0, startPosition + distance * easing);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="py-[80px]  flex flex-col justify-center bg-black">
      <div className="px-[3%] flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <p className="text-white lg:text-[47px] text-[42px] w-[230px] lg:leading-[60px] leading-[50px]">
            FEATURED PROJECTS
          </p>
          <p className="lg:hidden text-white text-[25px] px-[20px] py-[8px] bg-[rgb(30,30,30)] rounded-full">
            4
          </p>
        </div>
        <div>
          <p className="mt-[15px] text-[rgb(88,88,88)] lg:text-[16px] text-[15px] lg:w-[480px] max-w-[580px]  leading-[25px]">
            "Discover a selection of my standout projects, where innovation
            meets practical development. Each project showcases my skills in
            tackling complex challenges, delivering high-impact solutions, and
            consistently pushing the limits of modern web development."
          </p>
        </div>
      </div>
      <div className="mt-[30px] flex lg:flex-row flex-col lg:border-t lg:border-b border-[rgb(94,94,94)] ">
        <div className="sticky top-[90px] bottom-0 h-[400px] w-[200px] py-[50px] lg:flex hidden flex-col justify-between items-center text-white ">
          <p
            onClick={() => smoothScrollTo("Construct")}
            className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(30,30,30)] cursor-pointer"
          >
            CONSTRUCT
          </p>
          <p
            onClick={() => smoothScrollTo("SkateGods")}
            className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)] cursor-pointer"
          >
            SKATEGODS
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            LOADING...
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            LOADING...
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            LOADING...
          </p>
        </div>
        <div className="text-white flex flex-col lg:gap-0 gap-[80px] flex-1  lg:border-l border-[rgb(94,94,94)]">
          <div
            id="Construct"
            className="flex lg:flex-row flex-col lg:h-[400px]"
          >
            <div className=" lg:hidden flex px-[3%]">
              <img
                className="h-[300px] md:h-[350px] w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-[20px] lg:p-[20px] p-[3%] border-r border-[rgb(94,94,94)]">
              <div className="flex flex-wrap gap-[10px]">
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Project Portfolios
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Interactive Service Pages
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Smooth Animations
                </p>
              </div>
              <div className="lg:leading-[50px] leading-[40px]">
                <p className=" lg:text-[70px] text-[40px] font-[600]">
                  CONSTRUCT
                </p>
                <a
                  className="no-underline text-[15px] text-[rgb(144,255,0)]"
                  href="https://construct-app-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://construct-app-one.vercel.app/
                </a>
              </div>
              <div>
                <p className="lg:text-[16px] text-[15px] text-[rgb(88,88,88)]">
                  Construct is a responsive construction website born from a
                  passion for craftsmanship and innovation. Built with modern
                  web technologies, it offers seamless navigation and adapts
                  effortlessly across all devices.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://construct-app-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="px-[25px] py-[10px] lg:text-[16px] text-[15px] font-[500] border border-[rgb(94,94,94)] hover:bg-[rgb(144,255,0)] hover:text-black transition-all duration-300">
                    VIEW PROJECT
                  </p>
                </a>

                <MdArrowOutward className="lg:text-[50px] text-[40px]" />
              </div>
            </div>
            <div className="w-[400px] lg:flex hidden ">
              <img
                className="h-full w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
          </div>
          <div
            id="SkateGods"
            className="flex lg:flex-row flex-col lg:h-[400px] lg:border-t lg:border-[rgb(94,94,94)]"
          >
            <div className=" lg:hidden flex px-[3%]">
              <img
                className="h-[300px] md:h-[350px] w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-[20px] lg:p-[20px] p-[3%] border-r border-[rgb(94,94,94)]">
              <div className="flex flex-wrap gap-[10px]">
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  User-Friendly Interface
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Seamless Navigation
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Modern Design
                </p>
              </div>
              <div className="lg:leading-[50px] leading-[40px]">
                <p className=" lg:text-[70px] text-[40px] font-[600]">
                  SKATEGODS
                </p>
                <a
                  className="no-underline text-[15px] text-[rgb(144,255,0)]"
                  href="https://www.tesla.com/"
                >
                  https://www.tesla.com/
                </a>
              </div>
              <div>
                <p className="lg:text-[16px] text-[15px] text-[rgb(88,88,88)]">
                  SkateGods is a modern e-commerce platform designed for
                  skateboarding enthusiasts. With its cool, user-friendly
                  interface, the site offers a seamless shopping experience
                  that’s as exciting as the sport itself. From sleek visuals to
                  intuitive navigation, SkateGods ensures every visitor enjoys
                  the ride.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <a href="">
                  <p className="px-[25px] py-[10px] lg:text-[16px] text-[15px] font-[500] border border-[rgb(94,94,94)] hover:bg-[rgb(144,255,0)] hover:text-black transition-all duration-300">
                    VIEW PROJECT
                  </p>
                </a>

                <MdArrowOutward className="lg:text-[50px] text-[40px] " />
              </div>
            </div>
            <div className="w-[400px] lg:flex hidden ">
              <img
                className="h-full w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
