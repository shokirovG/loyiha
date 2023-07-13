import React from "react";
import { SeaFoodItem } from "./SeaFoodItem";

export const SeaFoodList = ({ seameals }) => {
  return (
    <>
      <h1 className="text-3xl font-mono font-[600] text-[46px] mt-[30px] ml-[80px]">
        Beef
      </h1>
      <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen ">
        {Seameals.map((item) => (
          <SeaFoodItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
};
