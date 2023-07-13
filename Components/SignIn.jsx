import useHttp from "@/hooks/useHttp";
import { fetched, fetching } from "@/store/actions/userAction";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignIn = ({ showInForm = false }) => {
  const route = useRouter();
  const { request } = useHttp();
  const [signIn, setSignIn] = useState("");
  const [{ userName, password, email }, setFormValue] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetching());
    setSignIn(localStorage.getItem("signIn"));
    request("http://localhost:3001/users").then((data) => {
      data && dispatch(fetched(data));
    });
  }, []);
  const handleValue = (e) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const sign = (e) => {
    console.log(users);
    e.preventDefault();
    const findItem = users.findIndex(
      (el) => el.email === email && el.password === password
    );
    if (findItem < 0) {
      alert("bunday email mavjud emas!");
    } else {
      localStorage.setItem("signIn", true);
      return route.push("/home");
    }
  };
  return (
    <div className="fixed w-[100%] h-[100vh] flex items-center justify-center top-0 mx-auto z-[555] bg-[#1c1c1c60] bg-indigo-500">
      <div className="fixed flex flex-col gap-[10px] items-center z-[600] ">
        <form
          className="flex flex-col gap-[10px] items-center "
          onSubmit={sign}
        >
          <input
            type="email"
            className="input"
            placeholder="email"
            name="email"
            onChange={handleValue}
            value={email}
          />
          <input
            type="password"
            className="input"
            placeholder="password"
            name="password"
            onChange={handleValue}
            value={password}
          />
          <input
            type="submit"
            value="Вход"
            className="bg-sky-500/75 p-[15px] rounded text-white font-mono hover:bg-sky-500/100 cursor-pointer
            "
          />
          <Link
            className="bg-red-400/75 p-[15px] rounded text-white font-mono hover:bg-red-500/100 cursor-pointer"
            href="/signup"
          >
            Регистрация
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
