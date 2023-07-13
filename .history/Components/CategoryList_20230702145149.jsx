import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ meals }) => {
  return (
    <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen">
      <h1 className="text-2xl">Beef</h1>
      {meals.map((item) => (
        <CategoryItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
};
