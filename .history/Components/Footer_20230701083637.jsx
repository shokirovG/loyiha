import Image from "next/image";
import Link from "next/link";
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
      <div className="flex items-center justify-evenly p-10 footer w-[100%] bg-white h-[376px] rounded-lg">
        <div className="w-[246px] h-[248px] flex flex-col items-center justify-between">
          <div className="w-[246px] h-[156px] flex flex-col items-center justify-around">
            <Image src={"/imgs/logo.png"} width={246} height={59} />
            <div className="w-[246px] flex justify-around">
              <Image src={"/imgs/appstore.png"} width={110} height={37} />
              <Image src={"/imgs/google.png"} width={110} height={37} />
            </div>
            <span className="text-[14px]">
              © Ninja Sushi. All rights reserved.
            </span>
          </div>
          <span className="text-[14px] text-[#1D1D1F] font-[500]">
            Политика конфиденциальности
          </span>
        </div>
        <div className="w-[804px] h-[184px] border flex justify-around">
          <ul>
            <li>Навигация:</li>
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>
              <Link href={"#"}>Меню</Link>
            </li>
            <li>
              <Link href={"#"}>Доставка</Link>
            </li>
            <li>
              <Link href={"#"}>Вакансии</Link>
            </li>
            <li>
              <Link href={"#"}>Новости</Link>
            </li>
          </ul>
          <ul>
            <li>Оформить заказ:</li>
            <li>
              <Link href={"/"}>+38 (067) 436 61 27</Link>
            </li>
            <li>
              <Link href={"#"}>+38 (066) 031 76 30</Link>
            </li>
            <li>
              <Link href={"#"}>+38 (093) 924 98 28</Link>
            </li>
          </ul>
          <ul>
            <li>Время работы::</li>
            <li>
              <Link href={"/"}>с 11:00 до 22:45</Link>
            </li>
            <li>
              <Link href={"#"}>с 22.45 до 06.00</Link>
            </li>
            <li>Ночная доставка</li>
          </ul>
          <div>
            <span>Мы в соц. сетях:</span>
            <div>
              <Image src={"/imgs/face.png"} width={26} height={26} />
              <Image src={"/imgs/insta.png"} width={26} height={26} />
            </div>
            <button>
              <Image src={"/imgs/face.png"} width={26} height={26} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
