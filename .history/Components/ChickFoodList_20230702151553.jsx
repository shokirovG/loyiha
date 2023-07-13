import React from "react";
import { SeaFoodItem } from "./SeaFoodItem";

export const ChickFoodList = ({ chickmeals }) => {
  return (
    <>
      <h1 className="text-3xl font-mono font-[600] text-[46px] mt-[130px] ml-[80px]">
        SeaFood
      </h1>
      <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen ">
        {chickmeals.map((item) => (
          <SeaFoodItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
};
