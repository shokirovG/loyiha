import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <>
      <div class="card categoryItem">
        <div class="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div class="card-content">
          <span class="card-title">{strMeal.slice(0, 7)}...</span>
        </div>
        <div class="card-action">
          <Link to="#">watch recipe</Link>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
