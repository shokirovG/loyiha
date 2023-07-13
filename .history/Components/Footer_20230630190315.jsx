import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] border hover:">
      <Image src={"/imgs/play.png"} width={1500} height={644} />
      <p>
        В Сети полно всевозможных сервисов учета, начиная от учета времени или
        калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до
        сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего
        инструмента, расходных материалов и комплект... Теперь – есть. Читать
        больше
      </p>
      <div className="footer">
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
