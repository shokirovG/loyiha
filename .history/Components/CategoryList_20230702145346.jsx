import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ meals }) => {
  return (
    <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen mt-[30px]">
      <h1 className="text-3xl font-mono font-[600] text-[46px]">Beef</h1>
      <br />
      <br />
      <br />
      {meals.map((item) => (
        <CategoryItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
};
