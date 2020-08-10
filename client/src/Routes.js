import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Checkout, Home } from "./components";

function Routes() {
  return (
    <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
