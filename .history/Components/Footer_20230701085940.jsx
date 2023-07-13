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
          <ul className="flex flex-col gap-[5px] w-[101px] h-[100%]">
            <li className="text-[14px] text-[#686870]">Навигация:</li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"/"}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                Меню
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                Доставка
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                Вакансии
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                Новости
              </Link>
            </li>
          </ul>

          <ul className="w-[168px] h-[120px] flex flex-col items-start gap-[5px]">
            <li className="text-[14px] text-[#686870]">Оформить заказ:</li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"/"}
              >
                +38 (067) 436 61 27
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                +38 (066) 031 76 30
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                +38 (093) 924 98 28
              </Link>
            </li>
          </ul>

          <ul className="w-[137px] h-[120px] flex flex-col items-start gap-[5px]">
            <li className="text-[14px] text-[#686870]">Время работы:</li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"/"}
              >
                с 11:00 до 22:45
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] text-[#1D1D1F] font-[500]"
                href={"#"}
              >
                с 22.45 до 06.00
              </Link>
            </li>
            <li className="text-[14px] text-[#686870]">Ночная доставка</li>
          </ul>

          <div className="w-[174px] h-[120px] flex flex-col gap-[5px]">
            <span>Мы в соц. сетях:</span>
            <div className="flex w-[64px] h-[26px] justify-between">
              <Image src={"/imgs/face.png"} width={26} height={26} />
              <Image src={"/imgs/insta.png"} width={26} height={26} />
            </div>
            <button className="w-[150px] h-[38px] bg-[#F5F5F7] rounded-md flex p-[8px 12px]">
              <Image src={"/imgs/telegram.png"} width={20} height={16} />
              <Link href={"#"}>Техподдержка</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
