"use client";

import React from "react";
import Image from "next/image";
import { Burger } from ".";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#" className="nav__link">
          <Image src="/imgs/logo.PNG" alt="logo" width={214} height={48} />
        </a>
      </div>
      <ul className="nav__items">
        <div className="nav__media">
          <li className="nav__item flag">
            <Image src="/imgs/flag.PNG" alt="logo" width={20} height={16} />
            <a href="#" className="nav__link">
              Киев
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Главная
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Доставка
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              О нас
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Новости
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link_tel">
              <Image src="/imgs/tel.PNG" alt="logo" width={24} height={24} />
              <span>+38 097 699 34 38</span>
            </a>
          </li>
        </div>
        <div className="nav__btns">
          <button className="nav__btn">
            <Image src="/imgs/bell.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="nav__btn">
            <Image src="/imgs/like.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="nav__btn">
            <Image src="/imgs/person.PNG" alt="logo" width={24} height={24} />
          </button>
          <button className="nav__btn">
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
