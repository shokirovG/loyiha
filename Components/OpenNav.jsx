import Image from "next/image";
import React from "react";

const OpenNav = () => {
  return (
    <ul id="nav__items">
      <li className="nav__item">
        <a href="#" className="nav__link first_link">
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
      <li className="nav__item" id="open_nav">
        <a href="#" className="nav__link_tel">
          <p>Оформить заказ:</p>
          <span>+38 (067) 436 61 27</span>
          <span>+38 (066) 031 76 30</span>
          <span>+38 (093) 924 98 28</span>
          <p>Звоните нам с 9:00 до 21:00без выходных</p>
        </a>
        <div className="open__imgs">
          <a href="#">
            <Image src="/imgs/open_1.PNG" width={24} height={24} />
          </a>
          <a href="#">
            <Image src="/imgs/open_2.PNG" width={24} height={24} />
          </a>
          <a href="#">
            <Image src="/imgs/open_3.PNG" width={24} height={24} />
          </a>
        </div>
      </li>
    </ul>
  );
};

export default OpenNav;
