import { API_KEY, API_URL } from "./config";

const getAllCategories = async () => {
  const res = await fetch(`http://localhost:3000/api/beefapi`).then(
    (responce) => responce.json()
  );
  return res;
};

const getAllCategories2 = async () => {
  const res = await fetch(`http://localhost:3000/api/seafoodapi`).then(
    (responce) => responce.json()
  );
  return res;
};

const filterCategory = async (name) => {
  const filter = await fetch(`${API_URL}${API_KEY}/filter.php?c=${name}`).then(
    (res) => res.json()
  );
  return filter;
};

const getMealRecipe = async (id) => {
  const meal = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  ).then((res) => res.json());
  return meal;
};

export { getAllCategories, filterCategory, getMealRecipe };
