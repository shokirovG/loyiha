import React from "react";

export const CategoryItem = ({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) => {
  return (
    <div className="w-96 h-3/4 bg-white mt-8 p-7 rounded-2xl flex flex-col items-center gap-5 ">
      <div className="">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="">{strCategory}</span>
        <p className="text-xs">{strCategoryDescription.slice(0, 100)}...</p>
      </div>
    </div>
  );
};
