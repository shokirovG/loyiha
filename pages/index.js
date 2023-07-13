import { Inter } from "next/font/google";
import { Categories, Header, Slider } from "@/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { CategoryList } from "@/Components/CategoryList";
import Head from "next/head";
import Map from "@/Components/Map";
import Footer from "@/Components/Footer";
import Loader from "@/Components/Loader";
import { SeaFoodList } from "@/Components/SeaFoodList";
import { ChickFoodList } from "@/Components/ChickFoodList";
import Adv from "@/Components/Adv";
import { DrinksList } from "@/Components/DrinksList";
import useHttp from "@/hooks/useHttp";
import { fetched, fetching } from "@/store/actions/userAction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetching());

    request("http://localhost:3001/users").then((data) => {
      data && dispatch(fetched(data));
    });
  }, []);

  //----------returning----------//
  return (
    <div className="App">
      <Head>
        <title>ninja</title>
      </Head>
      <div className="container p-5">
        <Header />
        <Categories />
        <Slider />

        <Map />
        <Adv />
        <Footer />
      </div>
    </div>
  );
}
