"use client";

import React from "react";
import Image from "next/image";
import { Burger } from ".";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sm:w-auto p-5 md:flex lg:flex xl:flex items-center w-screen justify-around h-24 bg-white mb-[16px]">
      <div className="w-52 h-12">
        <Link href="/" className="">
          <Image src="/imgs/logo.PNG" alt="logo" width={214} height={48} />
        </Link>
      </div>
      <div className="w-3/4 sm:flex md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between">
        <ul className="lg:flex xl:flex md:flex 2xl:flex items-center w-3/6 justify-between gap-12 md:gap-2 sm:flex-wrap lg:gap-12">
          <li className="flex w-20 justify-between items-center g-4 h-3">
            <Image src="/imgs/flag.PNG" alt="logo" width={20} height={2} />
            <a href="#" className="ml-2">
              Киев
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Главная
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Доставка
            </a>
          </li>
          <li className="w-12 flex">
            <a href="#" className="w-12">
              О нас
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Новости
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="w-48 justify-around flex items-center">
              <Image src="/imgs/tel.PNG" alt="logo" width={24} height={24} />
              <span>+38 097 699 34 38</span>
            </a>
          </li>
        </ul>
        <div className="flex items-center w-80 h-14">
          <div className="flex w-12 border items-center justify-center h-12 rounded-lg">
            <Image src="/imgs/bell.PNG" alt="logo" width={24} height={24} />
          </div>
          <div className="flex w-12 border items-center ml-2 justify-center h-12 rounded-lg">
            <Image src="/imgs/like.PNG" alt="logo" width={24} height={24} />
          </div>
          <div className="flex w-12 border items-center ml-2 justify-center h-12 rounded-lg">
            <Image src="/imgs/person.PNG" alt="logo" width={24} height={24} />
          </div>
          <div className="flex w-32 justify-around ml-2 border items-center h-12 rounded-lg">
            <span>Корзина</span>
            <Image src="/imgs/cart.PNG" alt="logo" width={24} height={24} />
          </div>
        </div>
      </div>

      <Burger />
    </header>
  );
};
export default Header;
