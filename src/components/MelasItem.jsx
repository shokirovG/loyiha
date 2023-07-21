import React from "react";
import { Link } from "react-router-dom";

const MelasItem = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  return (
    <div class=" mealsItem">
      <div class="card">
        <div class="card-image">
          <img src={strCategoryThumb} alt={strCategory} className="mealsImg" />
        </div>

        <div class="card-content">
          <b>
            <span class="card-title">{strCategory}</span>
          </b>
          <p>{strCategoryDescription.slice(0, 20)}...</p>
        </div>
        <div class="card-action">
          <Link to={`/category/${strCategory}`}>watch category</Link>
        </div>
      </div>
    </div>
  );
};

export default MelasItem;
