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
      className="mySwiper h-[489px] w-[100%] mt-10"
    >
      <SwiperSlide>
        <div className="flex justify-center w-[100%] SLIDER min-h-[100vh]">
          <div className="w-[7065px] p-[50px] flex flex-col items-start gap-[20px] mt-[20px] ml-[20px]">
            <h1
              id="head"
              className="text-[45px] font-[700] w-[565px] text-[#1D1D1F] text-left"
            >
              Ninja Sushi в Киеве! Пока только на левом берегу
            </h1>
            <h3 className="text-left">Доставку делаем с 10:00 до 19:30</h3>
            <button className="w-[263px] h-[22px] bg-[#00CC2D] p-5 flex items-center justify-center rounded-[12px] text-white text-[16px]">
              Перейти к новости
            </button>
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
        <div className="flex justify-center w-[100%]">
          {/* <div className="w-[7065px] p-[50px] flex flex-col items-start gap-[20px] mt-[60px] ml-[50px]">
            <h1 className="text-[50px] font-[700] w-[565px] text-[#1D1D1F] text-left">
              Ninja Sushi в Киеве! Пока только на левом берегу
            </h1>
            <h3 className="text-left">Доставку делаем с 10:00 до 19:30</h3>
            <button className="w-[263px] h-[22px] bg-[#00CC2D] p-5 flex items-center justify-center rounded-[12px] text-white text-[16px]">
              Перейти к новости
            </button>
          </div> */}
          <Image
            className="w-[300px]"
            src={"/imgs/ninja.png"}
            width={700}
            height={336}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
