import Image from "next/image";
import React from "react";

const Adv = () => {
  return (
    <div
      id="adv"
      className="mt-10 flex justify-evenly adv w-[85%] bg-white m-auto rounded-[20px]"
    >
      <div
        id="adv_items"
        className="flex flex-col items-start justify-around w-[540px] h-[304px] mt-[90px]"
      >
        <h1
          id="adv_text"
          className="text-[#1D1D1F] text-[47px] font-[700] newHead"
        >
          Ниндзя - это семья. Скачивайте наше приложение
        </h1>
        <p className="text-[#1D1D1F] text-[20px]" id="line">
          Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться
          голодным.
        </p>
        <div id="adv_btns" className="w-[236px] flex justify-between mt-4">
          <Image
            src={"/imgs/appstore.png"}
            width={110}
            height={37}
            className="cursor-pointer"
          />
          <Image
            src={"/imgs/google.png"}
            width={110}
            height={37}
            className="cursor-pointer"
          />
        </div>
      </div>
      <Image src={"/imgs/newTel.png"} width={500} height={644} />
    </div>
  );
};

export default Adv;
