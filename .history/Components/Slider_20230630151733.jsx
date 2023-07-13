"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
import Image from "next/image";

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
    <>
      <Swiper className="mySwiper h-[686px] w-[100%] mt-10">
        <SwiperSlide>
          <Image src="/imgs/slide.png" width={1000} height={686} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imgs/slide.png" width={1000} height={686} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imgs/slide.png" width={1000} height={686} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/imgs/slide.png" width={1000} height={686} />
        </SwiperSlide>
      </Swiper>
    </>
    // </div>
  );
};

export default Slider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
