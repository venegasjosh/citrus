import React from "react";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Image from "react-bootstrap/Image";

function Title() {
  return (
    // <Container className="someone">
      <Row>
         <Col>
          <Jumbotron> 
          <h1 className="titulo">
            Citrus Lover
            </h1>
            </Jumbotron>
        </Col>
      </Row>
  // </Container>
  );
}

export default Title;
