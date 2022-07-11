import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
import { BiTrash } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import { BsSliders } from "react-icons/bs";



function Index() {
  return (
    <div className="w-full md:w-3/4 py-10 md:px-6 flex justify-between items-center">
      <div className="flex justify-start items-center gap-x-2 text-shortener-grey-200">
        <div className="home w-[100px] h-[48px] flex justify-center items-center gap-x-2 rounded-lg bg-shortener-grey text-shortener-blue font-bold">
          <div>
            <TiHomeOutline className="w-[24px] h-[24px]" />
          </div>
          <p className="capitalize">home</p>
        </div>
        <div>
          <GiNetworkBars className="w-[24px] h-[24px]" />
        </div>
        <div>
          <BiTrash className="w-[24px] h-[24px]" />
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-2 text-shortener-grey-200">
        <div>
          <BsSliders className="w-[24px] h-[24px] rotate-90" />
        </div>
        <div className="filter w-[100px] h-[48px] flex justify-center items-center gap-x-2 rounded-lg bg-shortener-grey text-shortener-grey-200 font-bold">
          <div>
            <TbArrowsSort className="w-[24px] h-[24px]" />
          </div>
          <p className="capitalize">filter</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
