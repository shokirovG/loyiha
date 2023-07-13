import React from "react";

export const CategoryItem = ({ strMeal, idMeal, strMealThumb }) => {
  return (
    <div className="w-96 min-h-3/4 bg-white mt-8 p-7 rounded-2xl flex flex-col items-start gap-2 ">
      <div className="">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="">{strMeal}</span>
        <h2>Вес: 40 г{idMeal.slice(0, 2)}</h2>
      </div>
    </div>
  );
};
