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
