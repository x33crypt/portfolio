import React from "react";
import { MdArrowOutward } from "react-icons/md";
import service5 from "./../assets/keyservice4.webp";

const Featured = () => {
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
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(30,30,30)]">
            2UNGEE STUDIOS
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            2UNGEE STUDIOS
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            2UNGEE STUDIOS
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            2UNGEE STUDIOS
          </p>
          <p className="text-[15px] font-[300] text-[rgb(156,156,156)] py-[10px] px-[20px] rounded-[8px] hover:text-white hover:bg-[rgb(37,37,39)]">
            2UNGEE STUDIOS
          </p>
        </div>
        <div className="text-white flex flex-col lg:gap-0 gap-[80px] flex-1  lg:border-l border-[rgb(94,94,94)]">
          <div className="flex lg:flex-row flex-col lg:h-[400px]">
            <div className=" lg:hidden flex px-[3%]">
              <img
                className="h-[300px] md:h-[350px] w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col gap-[30px] lg:p-[20px] p-[3%] border-r border-[rgb(94,94,94)]">
              <div className="flex flex-wrap gap-[10px]">
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Photography
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Responsive Design
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Dynamic Galleries
                </p>
              </div>
              <div className="lg:leading-[50px] leading-[40px]">
                <p className=" lg:text-[70px] text-[40px] font-[600]">
                  2UNGEE STUDIOS
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
                  2UNGEE STUDIOS is a photography company with a sleek,
                  responsive website built to showcase stunning portfolios and
                  provide easy booking. Crafted with modern web technologies, it
                  ensures a seamless experience across all devices.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <a href="">
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
          <div className="flex lg:flex-row flex-col lg:h-[400px] lg:border-t lg:border-[rgb(94,94,94)]">
            <div className=" lg:hidden flex px-[3%]">
              <img
                className="h-[300px] md:h-[350px] w-full object-cover"
                src={service5}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col gap-[30px] lg:p-[20px] p-[3%] border-r border-[rgb(94,94,94)]">
              <div className="flex flex-wrap gap-[10px]">
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Photography
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Responsive Design
                </p>
                <p className="bg-[rgb(30,30,30)] px-[15px] lg:py-[10px] py-[8px] lg:text-[16px] text-[15px] w-max rounded-[10px] font-[200]">
                  Dynamic Galleries
                </p>
              </div>
              <div className="lg:leading-[50px] leading-[40px]">
                <p className=" lg:text-[70px] text-[40px] font-[600]">
                  2UNGEE STUDIOS
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
                  2UNGEE STUDIOS is a photography company with a sleek,
                  responsive website built to showcase stunning portfolios and
                  provide easy booking. Crafted with modern web technologies, it
                  ensures a seamless experience across all devices.
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
