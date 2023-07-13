import React from "react";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = ({ meals }) => {
  return (
    <div className="flex flex-wrap justify-evenly w-9/15 min-h-screen">
      {meals.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
};
