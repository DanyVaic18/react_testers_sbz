import React from "react";
import { Route, Switch as WouterSwitch } from "wouter";
import HomePage from "../views/Home";
import CounterPage from "../views/Counter";
import DebounceTest from "../views/DebounceTest";

const AppWRoutes = () => {
  return (
    <WouterSwitch>
      <Route path="/" component={HomePage} />
      <Route path="/init-react-vite" component={CounterPage} />
      <Route path="/debounce" component={DebounceTest} />
      <Route>404: No such page!</Route>
    </WouterSwitch>
  );
};

export default AppWRoutes;
