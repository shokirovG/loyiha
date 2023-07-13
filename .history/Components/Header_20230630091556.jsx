"use client";

import React from "react";
import Image from "next/image";
import { Burger } from ".";

const Header = () => {
  return (
    <header className="flex items-center">
      <div className="">
        <a href="#" className="">
          <Image src="/imgs/logo.PNG" alt="logo" width={214} height={48} />
        </a>
      </div>
      <ul className="flex">
        <div className="flex">
          <li className="">
            <Image src="/imgs/flag.PNG" alt="logo" width={20} height={16} />
            <a href="#" className="">
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
          <li className="">
            <a href="#" className="">
              О нас
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              Новости
            </a>
          </li>
          <li className="">
            <a href="#" className="">
              <Image src="/imgs/tel.PNG" alt="logo" width={24} height={24} />
              <span>+38 097 699 34 38</span>
            </a>
          </li>
        </div>
        <div className="">
          <button className="">
            <Image src="/imgs/bell.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="">
            <Image src="/imgs/like.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="">
            <Image src="/imgs/person.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="">
            <span>Корзина</span>
            <Image src="/imgs/cart.PNG" alt="logo" width={24} height={24} />
          </button>
        </div>
      </ul>

      <Burger />
    </header>
  );
};
export default Header;
