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
        <div className="flex justify-center w-[100%]">
          <div className="w-[7065px] p-[50px] flex flex-col items-center">
            <h1 className="text-[45px] font-[700] w-[565px] text-[#1D1D1F] text-left">
              Ninja Sushi в Киеве! Пока только на левом берегу
            </h1>
            <h3 className="text-left w-[565px]">
              Доставку делаем с 10:00 до 19:30
            </h3>
          </div>
          <Image
            className="w-[300px]"
            src={"/imgs/slide_img.png"}
            width={700}
            height={336}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex">
          <h1 className="text-[64px] font-[700] text-[#1D1D1F] text-left">
            Ninja Sushi в Киеве! Пока только на левом берегу
          </h1>
          <Image
            className="w-[300px]"
            src={"/imgs/new2.png"}
            width={900}
            height={336}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
