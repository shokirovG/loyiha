import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ meals }) => {
  return (
    <>
      <h1 className="text-3xl font-mono font-[600] text-[46px] mt-[30px] ml-[100px]">
        Beef
      </h1>
      <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen ">
        {meals.map((item) => (
          <CategoryItem key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
};
