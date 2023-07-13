import { Header } from "@/Components";
import DeliveryCards from "@/Components/DeliveryCards";
import Footer from "@/Components/Footer";
import Map from "@/Components/Map";
import React from "react";

const delivery = () => {
  return (
    <div className="container p-5">
      <Header />
      <Map />
      <DeliveryCards />
      <Footer />
    </div>
  );
};

export default delivery;
