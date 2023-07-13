import Image from "next/image";
import React from "react";

export const DrinksItem = ({ strDrink, idDrink, strDrinkThumb }) => {
  return (
    <div className="w-96 min-h-3/4 bg-white mt-8 p-7 rounded-2xl flex flex-col items-start gap-2 ">
      <div className="">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#1D1D1F] text-[22px] font-[700]">
          {strDrink.slice(0, 24)}
        </span>
        <h2 className="text-[#F63] text-[18px]">
          Вес: {idDrink.slice(0, 2)} г
        </h2>
      </div>
      <div className="w-[90%] flex justify-between">
        <h1 className="text-[25px] text-[#1D1D1F] font-bold">
          {idDrink.slice(0, 3)} грн
        </h1>
        <div className="flex w-[136px] justify-center gap-[12px]">
          <div className="flex items-center justify-center bg-[#F5F5F7] rounded-md w-[50px] h-[36px] cursor-pointer">
            <Image src="/imgs/newlike.png" width={30} height={26} />
          </div>
          <div className="flex items-center justify-center bg-[#CCF5D5] rounded-md w-[60px] h-[36px] cursor-pointer">
            <Image src="/imgs/plus.png" width={25} height={26} />
          </div>
        </div>
      </div>
    </div>
  );
};
