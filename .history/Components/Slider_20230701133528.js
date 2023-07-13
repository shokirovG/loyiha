"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper h-[600px] w-[100%] mt-10"
    >
      <SwiperSlide>
        <div>
          <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
