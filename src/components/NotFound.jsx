import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }, []);

  return <div>NotFound 404!</div>;
};

export default NotFound;
