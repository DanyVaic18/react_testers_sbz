import React from "react";
import { Route, Switch as WouterSwitch } from "wouter";
import HomePage from "../Views/Home";
import CounterPage from "../Views/Counter";

const AppWRoutes = () => {
  return (
    <WouterSwitch>
      <Route path="/" component={HomePage} />
      <Route path="/init-react-vite" component={CounterPage} />
      <Route>404: No such page!</Route>
    </WouterSwitch>
  );
};

export default AppWRoutes;
