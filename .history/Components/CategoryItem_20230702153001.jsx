import React from "react";

export const CategoryItem = ({ strMeal, idMeal, strMealThumb }) => {
  return (
    <div className="w-96 min-h-3/4 bg-white mt-8 p-7 rounded-2xl flex flex-col items-start gap-2 ">
      <div className="">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#1D1D1F] text-[22px] font-[700]">
          {strMeal.slice(0, 24)}
        </span>
        <h2 className="text-[#F63] text-[18px]">Вес: {idMeal.slice(0, 2)} г</h2>
      </div>
      <div>
        <h1 className="text-[30px] text-[#1D1D1F]">{idMeal.slice(0, 3)} грн</h1>
      </div>
    </div>
  );
};
