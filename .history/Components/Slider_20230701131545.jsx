"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[686px] w-[100%] mt-10"
      >
        <SwiperSlide>
          <div></div>
          {/* <Image src="/imgs/slide.png" width={1000} height={686} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          {/* <Image src="/imgs/slide.png" width={1000} height={686} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          {/* <Image src="/imgs/slide.png" width={1000} height={686} /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div></div>
          {/* <Image src="/imgs/slide.png" width={1000} height={686} /> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
