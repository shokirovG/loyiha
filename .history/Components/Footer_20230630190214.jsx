import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Image src={"/imgs/play.png"} width={1500} height={644} />
      <div className="footer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
