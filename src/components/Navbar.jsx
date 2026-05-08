import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { List } from "./List";
import { Button } from "./Button";
import { Responsive_Link } from "./Responsive_Link";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  let [open, setopen] = useState(false);
  function Condition() {
    setopen(!open);
  }
  return (
    <>
      <div className="h-[max-content]  flex items-center flex-wrap gap-y-[10px]  justify-between px-[20px] sm:px-[60px] lg:px-[80px] xl:px-[170px] py-[15px] w-[100%] bg-[#D1CFF4]">
        <img
          src="https://preview.colorlib.com/theme/safario/img/logo.png"
          className=" h-[auto]"
        />
        <List />
      
        <div className=" hidden lg:flex">
          <Button text={"Get Started"} />
        </div>
        <div className="lg:hidden flex">
          {!open ? (
            <MdMenu
              onClick={() => {
                Condition();
              }}
              className="text-[30px] text-[#6059F6]"
            />
          ) : (
            <RxCross1
              onClick={() => {
                Condition();
              }}
              className="text-[30px] text-[#6059F6]"
            />
          )}
        </div>
      </div>
      <Responsive_Link value={open} />
    </>
  );
};
