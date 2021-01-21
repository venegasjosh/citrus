import React from "react";

import Title from '../components/title'
import Links from '../components/links'
import Video from '../components/video'

import { Container, Row, Col } from "reactstrap";

function Entry() {
  return (
    
    
    <Container className="wukong" fluid>
    <Title/>
    <Video/><br/>
    <Links/>
    
      
    </Container>


    
  );
}

export default Entry;
