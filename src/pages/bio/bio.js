import React, { useRef, useEffect, useState } from 'react'
import "./bio.css";
import { Jumbotron, Container, Col } from "reactstrap";
import Title from "../../components/title";
import Titlemini from "../../components/minititle/minititle";
import Midwaytitle from "../../components/midwaytitle/midwaytitle";
import Mediabar from "../../components/mediabar/mediabar";

// import Video from '../../components/video'
import Gallery from "../../components/gallery/gallery";
import ScrollToTop from '../../components/scroll/ScrollToTop'




const Bio = (props) => (
  
  <Container className="helen">
  
    <Titlemini />

    <Gallery />
    <Midwaytitle />
    <Mediabar />

  </Container>
);

export default Bio;
