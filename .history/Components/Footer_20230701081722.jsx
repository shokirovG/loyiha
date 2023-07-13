import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] border h-[160vh] text-[16px] text-[#9E9E9E] flex flex-col justify-between mt-10">
      <Image src={"/imgs/play.png"} width={1500} height={644} />
      <p className="w-[50%] text-justify m-auto">
        В Сети полно всевозможных сервисов учета, начиная от учета времени или
        калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до
        сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего
        инструмента, расходных материалов и комплект... Теперь – есть
        <span className="float-right text-[#00CC2D] mt-2">Читать больше</span>
      </p>
      <div className="flex items-center justify-between p-10 footer w-[100%] bg-white h-[376px] rounded-lg">
        <div className="w-[246px] h-[248px] flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <Image src={"/imgs/logo.png"} width={246} height={59} />
            <div className="w-[246px] flex justify-between">
              <Image src={"/imgs/appstore.png"} width={110} height={37} />
              <Image src={"/imgs/google.png"} width={110} height={37} />
            </div>
            <span>© Ninja Sushi. All rights reserved.</span>
          </div>
          <span>Политика конфиденциальности</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
