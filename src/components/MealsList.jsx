import React from "react";
import MelasItem from "./MelasItem";

const MealsList = ({ meals }) => {
  return (
    <div className="mealsList">
      {meals.map((elem) => (
        <MelasItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default MealsList;
