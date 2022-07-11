import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBell, BsChevronDown } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";




import useLogic from "./index.logic";
import InputField from "../input_field";

function Index() {
  // const {} = useLogic()
  return (
    <div className="w-full p-4 md:p-8 shadow-lg">
      <div className="mobile md:hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="capitalize text-shortener-grey-300 font-bold font-bebas-neue  text-xl">
            <p>
              <span className="uppercase">snip'd it</span>
            </p>
          </div>

          <div>
            <GiHamburgerMenu className="w-[24px] h-[24px] text-shortener-grey-300 cursor-pointer" />
          </div>
        </div>
        <div className="w-full">
          <InputField />
        </div>
      </div>
      <div className="desktop hidden md:flex items-center">
        <div className="flex justify-between items-center w-1/5">
          <div className="capitalize text-shortener-grey-300 font-bold text-lg font-bebas-neue text-2xl">
            <p>
              <span className="uppercase">snip'd it</span>
            </p>
          </div>
        </div>
        <div className="w-full">
          <InputField />
        </div>

        <div className="flex justify-end items-center">
          <div className="relative mx-4">
            <BsBell className="w-[24px] h-[24px]" />
            <div className="absolute top-0 -right-1 p-1 rounded-full bg-red-600 w-[4px] h-[4px]" />
          </div>

          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center mx-8 cursor-pointer">
            <FaRegUser className="w-[32px] h-[32px]" />
						<BsChevronDown className="mx-2"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
