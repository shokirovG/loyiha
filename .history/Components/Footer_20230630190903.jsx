import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] border h-[160vh] text-[16px] flex flex-col justify-between mt-10">
      <Image src={"/imgs/play.png"} width={1500} height={644} />
      <p className="w-[50%] text-justify m-auto">
        В Сети полно всевозможных сервисов учета, начиная от учета времени или
        калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до
        сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего
        инструмента, расходных материалов и комплект... Теперь – есть
        <span className="float-right text-[#00CC2D] mt-2">Читать больше</span>
      </p>
      <div className="footer w-[100%] bg-white h-[35%]">
        <div></div>
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
