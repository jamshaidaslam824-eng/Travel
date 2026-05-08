import React from "react";
import { Button } from "./Button";

export const Landing_Page = () => {
  return (
    <div className="flex flex-col gap-y-[45px] md:flex-row">
      
      <div className="flex flex-col items-center mt-[30px] gap-y-[30px] md:w-[50%] xl:gap-y-[55px] md:h-[80vh] md:justify-center">
        <h1 className="text-[#6059F6] font-semibold text-center  text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] px-[45px] xl:px-[160px]">
          Travel More To Discover Yourself
        </h1>
        <p className="text-gray-500  text-[15px] text-center px-[15px] sm:px-[60px] xl:px-[140px] leading-[30px] xl:leading-[35px]">
          Air seed winged lights saw kind whales in sixth dont seas dron image
          so fish all tree meat dont there is seed winged lights saw kind whales
          in sixth dont seas dron image so fish all tree meat dont there
        </p>
        <Button text={"Get Started"} />
      </div>
      <div className="flex justify-center md:w-[50%] md:h-[80vh]  md:mt-[30px] md:items-center">
        <div>
            <img src="https://preview.colorlib.com/theme/safario/img/home/hero-img.png" className="h-[75vh] w-full"/>
        </div>
      </div>
    </div>
  );
};
