import React from "react";

import { Link, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Tel from "./components/Tel";
import User from "./components/User";

const App = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Home
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/user">user</Link>
            </li>
            <li>
              <Link to="/tel">tel</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/tel/:name" component={Tel} />
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
};

export default App;
