"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[60ppx] w-[100%] mt-10"
      ></Swiper>
    </>
  );
}
