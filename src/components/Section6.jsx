import React from "react";
import { Button } from "./Button";

export const Section6 = () => {
  return (
    <div className="h-[max-content] w-[100%]   pt-[120px] pb-[120px] lg:px-[150px] xl:px-[200px] flex flex-col  md:flex-row gap-y-[50px]  lg:gap-y-[20px]">
      <div className=" px-[30px] flex flex-col gap-y-[15px] w-[100%] sm:w-[85%] md:w-[45%]   lg:w-[450px] justify-center  sm:mx-auto">
        <h1 className="text-[22px] sm:text-[30px] font-bold">
          Search suitable and affordable plan for your tour
        </h1>
        <p className="text-[15px] text-gray-500">
          Make she'd moved divided air. Whose tree that replenish tone hath own
          upon them it multiply was blessed is lights make gathering so day
          dominion so creeping
        </p>
        <div>
          <Button text={"Learn More"} />
        </div>
      </div>
      {/* {formm} */}
      <div className="bg-[#F8F8FF] h-[max-content] py-[21px] md:py-[40px] mx-auto w-[90%] sm:w-[75%] md:w-[45%] lg:w-[45%] ">
        <form action="">
            <h1 className="text-[20px] sm:text-[25px] md:text-[27px] font-bold text-center mt-[15px]">Search Package</h1>

            <input
    type="text"
    class="peer block min-h-[auto] text-black placeholder:text-black w-[90%] mx-[auto] mt-[30px] mb-[20px] rounded border-0 bg-[#FFFFFF] px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  "
    id="exampleFormControlInput2"
    placeholder="Username" />
          
              <select disabled id="countries_disabled" class="block w-[90%] mx-auto bg-[#FFFFFF] text-heading text-sm rounded-base focus:ring-brand focus:border-brand placeholder:Reception px-3 py-2.5 shadow-xs text-fg-disabled">
         <option value="">Catahory</option>
  </select>
                <select disabled id="countries_disabled" class="block w-[90%] mx-auto my-[20px] bg-[#FFFFFF] text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs text-fg-disabled">
      <option value="">Tour duration</option>
  </select>
                <select disabled id="countries_disabled" placeholder="Price range" class="block w-[90%] mx-auto text-black bg-[#FFFFFF]  text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs text-fg-disabled">
                      <option value="">Price Range</option>
    
  </select>

          
               <div className="flex justify-center mt-[40px] mb-[30px]">
                <Button text={"Search Package"}/>
               </div>
        </form>
        
      </div>
    </div>
  );
};
