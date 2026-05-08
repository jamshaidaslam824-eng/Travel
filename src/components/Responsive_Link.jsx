import React from "react";
import { List } from "./List";

export const Responsive_Link = ({ value }) => {
  let List = [" Home", "About", "Packages", "Pages", "Blog", "Contact"];
  return (
    <>
      {
        <div
          className={`w-[100%] flex lg:hidden bg-[#D1CFF4] ${value ? "h-[220px] py-[15px] transition-all overflow-hidden  duration-700" : "h-[0px] transition-all overflow-hidden   duration-700"}`}
        >
          <ul className="flex  gap-y-[10px]  px-[80px] sm:px-[120px] flex-col">
            {List.map((val, ind) => {
              return (
                <>
                  <li key={ind} className="font-semibold">
                    {val}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      }
    </>
  );
};
