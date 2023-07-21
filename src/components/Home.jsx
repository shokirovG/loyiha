import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import MealsList from "./MealsList";
const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => data && setMeals(data.categories));
  }, []);
  console.log(meals);
  return (
    <div className="home">
      {meals.length === 0 ? <Loader /> : <MealsList meals={meals} />}
    </div>
  );
};

export default Home;
