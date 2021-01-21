import React from "react";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Image from "react-bootstrap/Image";

function Title() {
  return (
    <Container className="someone">
      <Row>
        <Col>
          <Jumbotron className="titulo"> <div className="yo"></div></Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Title;
