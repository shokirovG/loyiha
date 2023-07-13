import { Inter } from "next/font/google";
import { Categories, Header, Slider } from "@/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mealFetched, mealFetching } from "@/Store/MealSlice";
import { getAllCategories } from "@/services/api";
import { CategoryList } from "@/Components/CategoryList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { meals, isLoading } = useSelector((state) => state);
  useEffect(() => {
    dispatch(mealFetching());
    getAllCategories().then((data) => dispatch(mealFetched(data.categories)));
  }, []);
  const renderMealList = (meals) => {
    if (meals.length === 0) {
      return <h1>Meals not found!</h1>;
    }
    if (isLoading === "loading") {
      <Loader />;
    } else if (isLoading === "loadingError") {
      <Error />;
    }
    return <CategoryList meals={meals} />;
  };
  return (
    <div className="App">
      <div className="container p-5">
        <Header />
        <Categories />
        <Slider />
        {renderMealList(meals)}
      </div>
    </div>
  );
}
