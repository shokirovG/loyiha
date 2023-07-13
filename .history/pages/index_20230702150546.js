import { Inter } from "next/font/google";
import { Categories, Header, Slider } from "@/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mealFetched, mealFetching, SeamealFetched } from "@/Store/MealSlice";
import { getAllCategories, getAllCategoriesFood } from "@/services/api";
import { CategoryList } from "@/Components/CategoryList";
import Head from "next/head";
import Map from "@/Components/Map";
import Footer from "@/Components/Footer";
import Loader from "@/Components/Loader";
import { SeaFoodList } from "@/Components/SeaFoodList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { meals, isLoading, seameals, SeaLoading } = useSelector(
    (state) => state
  );
  useEffect(() => {
    dispatch(mealFetching());
    getAllCategories().then((data) => dispatch(mealFetched(data)));
    getAllCategoriesFood().then((data) => dispatch(SeamealFetched(data)));
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
    return <CategoryList meals={meals.slice(0, 6)} />;
  };
  const renderMealListFood = (seameals) => {
    if (seameals.length === 0) {
      return <h1>Meals not found!</h1>;
    }
    if (SeaLoading === "loading") {
      <Loader />;
    } else if (SeaLoading === "loadingError") {
      <Error />;
    }
    return <SeaFoodList seameals={seameals.slice(0, 6)} />;
  };
  return (
    <div className="App">
      <Head>
        <title>ninja-sushi</title>
      </Head>
      <div className="container p-5">
        <Header />
        <Categories />
        <Slider />
        {renderMealList(meals)}
        {renderMealListFood(seameals)}
        <Map />
        <Footer />
      </div>
    </div>
  );
}
