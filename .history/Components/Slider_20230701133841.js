"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper h-[600px] w-[100%] mt-10"
    >
      <SwiperSlide>
        <div className="flex">
          <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
          <Image
            className="w-[300px]"
            src={"/imgs/new.png"}
            width={300}
            height={336}
          />
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
