import NotSignIn from "@/Components/NotSignIn";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const route = useRouter();
  const [signIn, setSignIn] = useState("");
  useEffect(() => {
    setSignIn(localStorage.getItem("signIn"));
  }, []);
  const logOut = () => {
    localStorage.setItem("signIn", "null");
    setSignIn(localStorage.getItem("signIn"));
    return route.push("/");
  };
  console.log(typeof signIn);
  return (
    <>
      {signIn === null || signIn === "null" ? (
        <NotSignIn />
      ) : (
        <div>
          <Head>
            <title>Home</title>
          </Head>
          <h1>Home</h1>
          <button className="border-[1px] bg-red-500" onClick={logOut}>
            log out
          </button>
        </div>
      )}
    </>
  );
};

export default index;
