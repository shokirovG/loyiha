import useHttp from "@/hooks/useHttp";
import { fetched, fetching } from "@/store/actions/userAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

const SignUp = ({ showForm }) => {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [{ userName, password, email }, setFormValue] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [r, setR] = useState(false);
  useEffect(() => {
    dispatch(fetching());
    request("http://localhost:3001/users").then(
      (data) => data && dispatch(fetched(data))
    );
  }, [r]);
  console.log(users);
  const reg = (e) => {
    e.preventDefault();
    setR((prev) => !prev);
    const newUser = {
      id: v4(),
      userName,
      password,
      email,
      goods: [],
      likes: [],
    };
    const findItem = users.findIndex((el) => el.email === newUser.email);
    console.log(findItem);
    if (findItem < 0) {
      request(
        "http://localhost:3001/users",
        "POST",
        JSON.stringify(newUser)
      ).then((res) => {
        setFormValue({ userName: "", password: "", email: "" });
      });
    } else {
      alert("bunday login bor");
    }
  };
  const handleValue = (e) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="fixed w-[100%] h-[100vh] flex items-center justify-center top-0 mx-auto z-[555] bg-[#1c1c1c60] bg-indigo-500">
        <div className="fixed flex flex-col gap-[10px] items-center z-[600] ">
          <form
            className="flex flex-col gap-[10px] items-center "
            onSubmit={reg}
          >
            <input
              type="text"
              className="input"
              placeholder="userName"
              name="userName"
              onChange={handleValue}
              value={userName}
            />
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
              value="Регистрация"
              className="bg-sky-500/75 p-[15px] rounded text-white font-mono hover:bg-sky-500/100 cursor-pointer
              "
            />
            <Link
              className="bg-red-400/75 p-[15px] rounded text-white font-mono hover:bg-red-500/100 cursor-pointer"
              href="/signIn"
            >
              Вход
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
