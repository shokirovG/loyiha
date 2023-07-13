import React from "react";
import { DrinksItem } from "./DrinksItem";

export const DrinksList = ({ drinks }) => {
  return (
    <>
      <h1 className="text-3xl font-mono font-[600] text-[46px] mt-[130px] ml-[80px]">
        Drinks
      </h1>
      <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen ">
        {drinks.map((item) => (
          <DrinksItem key={item.idDrink} {...item} />
        ))}
      </div>
    </>
  );
};
