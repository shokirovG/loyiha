import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "./CategoryList";
import Loader from "./Loader";

const Category = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((res) => res.json())
      .then((data) => data && setCategory(data.meals));
  }, [name]);
  console.log(category);
  return (
    <div className="category">
      {category.length === 0 ? (
        <Loader />
      ) : (
        <CategoryList category={category} />
      )}
    </div>
  );
};

export default Category;
