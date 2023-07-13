import React from "react";
import { ChickFoodItem } from "./ChickFoodItem";

export const ChickFoodList = ({ chickmeals }) => {
  return (
    <>
      <h1 className="text-3xl font-mono font-[600] text-[46px] mt-[130px] ml-[80px]">
        Chicken
      </h1>
      <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen ">
        {chickmeals.map((item) => (
          <ChickFoodItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
};
