import { React} from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Entry from "../pages/entry";
import Bio from "../pages/bio/bio";
import Contact from "../pages/contact/contact";
import ScrollToTop from "../components/scroll/ScrollToTop.js";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <Container>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Entry}></Route>
          <Route exact path="/bio" component={Bio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default Main;
