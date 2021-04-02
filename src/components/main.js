import {React, Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import {Container} from 'reactstrap'
import Entry from "../pages/entry";
import Bio from "../pages/bio/bio";
import Contact from '../pages/contact/contact'
import ScrollToTop from '../components/scroll/ScrollToTop'
const Main = () => {
  
  return (
    <Fragment>
    <ScrollToTop/>
    <Switch >
    
      <Route exact path="/" component={Entry}></Route>
      <Route exact path="/bio" component={Bio} ></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
    </Fragment>
  );
};

export default Main;
