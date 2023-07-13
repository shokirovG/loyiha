"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import slide from "../public/imgs/slide.png";

const Slider = () => {
  return (
    // <div className="slider">
    //   <div className="slider_info" id="slider_info">
    //     <h1>Ninja Sushi в Киеве! Пока только на левом берегу</h1>
    //     <span>Доставку делаем с 10:00 до 19:30</span>
    //     <a href="#" className="slider_btn">
    //       Перейти к новости
    //     </a>
    //   </div>
    // <div className="w-[1920px] mt-10 m-auto flex justify-center items-center">
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-[100%] mt-10 m-auto flex justify-center items-center"
    >
      <SwiperSlide className="w-[100%]">
        <img src={slide} alt="" className="w-screen" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide} alt="" />
      </SwiperSlide>
    </Swiper>
    // </div>
    // </div>
  );
};

export default Slider;
