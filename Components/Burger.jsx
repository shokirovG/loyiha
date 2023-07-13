"use client";

import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { OpenNav } from ".";

const Burger = () => {
  const [isOpen, settOpen] = useState(false);
  return (
    <div className="burger">
      <Hamburger toggled={isOpen} toggle={settOpen} />
      {isOpen ? <OpenNav /> : null}
    </div>
  );
};

export default Burger;
