"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Burger } from ".";
import Link from "next/link";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const showForm = () => {
    setShow((prev) => !prev);
  };
  const showInForm = () => {
    setShowIn((prev) => !prev);
  };
  return (
    <header
      id="header"
      className="sm:w-auto p-5 md:flex lg:flex xl:flex items-center w-screen justify-around h-24 bg-white mb-[16px]"
    >
      <div className="w-52 h-12" id="logo">
        <Link href="/" className="">
          <Image src="/imgs/logo.PNG" alt="logo" width={214} height={48} />
        </Link>
      </div>
      <div
        id="nav"
        className="w-3/4 sm:flex md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between"
      >
        <ul
          id="navbar"
          className="lg:flex xl:flex md:flex 2xl:flex items-center w-3/6 justify-between gap-12 md:gap-2 lg:gap-12"
        >
          <li
            id="flag"
            className="flex w-20 justify-around items-center g-4 h-3"
          >
            <Image src="/imgs/flag.PNG" alt="logo" width={20} height={2} />
            <Link href="#" className="ml-2">
              Киев
            </Link>
          </li>
          <li className="">
            <Link href="/">Главная</Link>
          </li>
          <li className="">
            <Link href="/Delivery">Доставка</Link>
          </li>
          <li className="w-12 flex">
            <Link href="#" className="w-12">
              О нас
            </Link>
          </li>
          <li>
            <Link href="/News">Новости</Link>
          </li>
          <li className="flex items-center" id="last">
            <Link
              href="#"
              id="last"
              className="w-48 justify-around flex items-center"
            >
              <Image src="/imgs/tel.PNG" alt="logo" width={24} height={24} />
              <span>+38 097 699 34 38</span>
            </Link>
          </li>
        </ul>
        <div id="btns" className="flex items-center w-80 h-14">
          <div className="flex w-12 border items-center justify-center h-12 rounded-lg">
            <Link href={"#"}>
              <Image src="/imgs/bell.PNG" alt="logo" width={24} height={24} />
            </Link>
          </div>
          <div className="flex w-12 border items-center ml-2 justify-center h-12 rounded-lg">
            <Link href={"#"}>
              <Image src="/imgs/like.PNG" alt="logo" width={24} height={24} />
            </Link>
          </div>
          <div
            className="flex w-12 border items-center ml-2 justify-center h-12 rounded-lg"
            onClick={showForm}
          >
            <Link href={"#"}>
              <Image src="/imgs/person.PNG" alt="logo" width={24} height={24} />
            </Link>
          </div>
          <div className="flex w-12 border items-center ml-2 justify-center h-12 rounded-lg">
            <Link href={"/signIn"}>
              <Image src="/imgs/person.PNG" alt="logo" width={24} height={24} />
            </Link>
          </div>
          <div className="flex w-32 justify-around ml-2 border items-center h-12 rounded-lg">
            <span>Корзина</span>
            <Link href={"#"}>
              <Image src="/imgs/cart.PNG" alt="logo" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      {show ? <SignUp showForm={showForm} /> : null}
    </header>
  );
};
export default Header;
