import React from "react";

export const CategoryItem = ({ strMeal, strMealThumb }) => {
  return (
    <div className="w-96 h-3/4 bg-white mt-8 p-7 rounded-2xl flex flex-col items-center gap-5 ">
      <div className="">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-left">{strMeal}</span>
      </div>
    </div>
  );
};
