import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

const Tel = () => {
  const loc = useRouteMatch();
  console.log(loc);
  return <h1>tel</h1>;
};

export default Tel;
