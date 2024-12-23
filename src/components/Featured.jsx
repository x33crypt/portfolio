import React from "react";

const Featured = () => {
  return (
    <div className="py-[80px] px-[3%] flex flex-col justify-center bg-black">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
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
    </div>
  );
};

export default Featured;
