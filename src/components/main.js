import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

// import Entry from "../pages/entry";
// import Bio from "../pages/bio/bio";
// import Contact from "../pages/contact/contact";
// import ScrollToTop from "../components/scroll/ScrollToTop.js";
import Loading from "./loading/loading";
const Entry = lazy(() => import("../pages/entry"));
const Bio = lazy(() => import("../pages/bio/bio"));
const Contact = lazy(() => import("../pages/contact/contact"));
const ScrollToTop = lazy(() => import("../components/scroll/ScrollToTop.js"));

const Main = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Container>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Entry} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Container>
      </Suspense>
    </Router>
  );
};

export default Main;
