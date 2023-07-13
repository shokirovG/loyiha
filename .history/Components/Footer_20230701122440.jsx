import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bigOne w-[100%] min-h-[160vh] gap-[50px] text-[16px] text-[#9E9E9E] flex flex-col justify-between mt-10">
      <Image src={"/imgs/play.png"} width={1500} height={644} />
      <p className="paragraph w-[60%] text-center m-auto">
        В Сети полно всевозможных сервисов учета, начиная от учета времени или
        калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до
        сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего
        инструмента, расходных материалов и комплект... Теперь – есть
        <span className="float-right text-[#00CC2D] mt-2">Читать больше</span>
      </p>
      <div className="footer flex items-center justify-evenly max-w-[100%] bg-white min-h-[376px] rounded-lg">
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
        <div className="footer_items max-w-[754px] min-h-[184px] flex justify-between gap-10 mb-5">
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

          <div className="w-[174px] h-[120px] flex flex-col gap-[12px]">
            <span>Мы в соц. сетях:</span>
            <div className="flex w-[64px] h-[26px] justify-between">
              <Image src={"/imgs/face.png"} width={26} height={26} />
              <Image src={"/imgs/insta.png"} width={26} height={26} />
            </div>
            <button className="w-[160px] h-[40px] bg-[#F5F5F7] rounded-lg flex justify-around items-center p-[12px]">
              <Image src={"/imgs/telegram.png"} width={20} height={16} />
              <Link
                className="text-[#039BE5] text-[16px] font-mono font-[500]"
                href={"#"}
              >
                Техподдержка
              </Link>
            </button>
          </div>
        </div>
        <div className="others w-[246px] min-h-[248px] flex flex-col justify-between pt-[20px] items-center">
          <div className="w-[246px] h-[194] gap-[5px] flex flex-col">
            <h1 className="headline sm:text-[16px] md:text-[32px] text-[#1D1D1F] font-[700]">
              #NinjaSushi
            </h1>
            <p className="text-[#9E9E9E] text-[16px] line-[24px]">
              Ninja Sushi в фотографиях наших клиентов
            </p>
            <button className="w-[246px] h-[56px] bg-[#F5F5F7] rounded-[12px] text-[#00CC2D] font-[500] text-[16px] font-[Inter]">
              <Link href={"https://www.instagram.com/bektoshevich_01/"}>
                Перейти в instagram
              </Link>
            </button>
          </div>
          <div className="flex w-[105px] h-[18px] justify-around">
            <Image src={"/imgs/master.png"} width={20} height={16} />
            <Image src={"/imgs/visa.png"} width={20} height={16} />
            <Image src={"/imgs/pg.png"} width={20} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
