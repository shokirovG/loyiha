import React, { useEffect, useState } from "react";

import { Link, Route, Switch, useParams } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Tel from "./components/Tel";
import User from "./components/User";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/tel/:name" component={Tel} />
        <Route path="/category/:name" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
