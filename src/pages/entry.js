import React from "react";

import Title from "../components/title";
import Links from "../components/links";
import Video from "../components/video";
import Mediabar from "../components/mediabar/mediabar";
import {Container} from "reactstrap";
import "../index.css";

function Entry() {
  return (
    <Container className="wukong" fluid>
      <Title />
      <Video />
      <br />
      <Links />
      <Mediabar />
    </Container>
  );
}

export default Entry;
