import Link from "next/link";
import React from "react";

const NotSignIn = () => {
  return (
    <div>
      <h1>Uzur saytga kiring</h1>
      <Link href="/signIn">SignIn</Link>
    </div>
  );
};

export default NotSignIn;
