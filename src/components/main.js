import React from "react";
import { Switch, Route } from "react-router-dom";

import Entry from "../pages/entry";
import Bio from "../pages/bio/bio";
import Contact from '../pages/contact/contact'

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Entry}></Route>
      <Route exact path="/bio" component={Bio}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
};

export default Main;
