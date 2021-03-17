import React from "react";

import Title from "../components/title";
import Links from "../components/links";
import Video from "../components/video";
// import Footer from "../components/footer/footer";
import Mediabar from "../components/mediabar/mediabar";

import Footer from "../components/footer/footer";
import { Container, Row, Col } from "reactstrap";

import '../index.css'

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
