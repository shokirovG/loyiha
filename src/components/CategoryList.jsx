import React from "react";
import { useHistory } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ category }) => {
  const { goBack } = useHistory();
  return (
    <div className="categoryList">
      <button
        className="waves-effect waves-light btn"
        onClick={() => {
          goBack();
        }}
      >
        go Back
      </button>
      {category.map((elem) => (
        <CategoryItem key={elem.idMeal} {...elem} />
      ))}
    </div>
  );
};

export default CategoryList;
