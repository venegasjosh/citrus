import React from "react";

import { Row, Col, Jumbotron } from "reactstrap";

function Title() {
  return (
    <Row>
      <Col>
        <Jumbotron>
          <h1 className="titulo">Citrus Lover</h1>
        </Jumbotron>
      </Col>
    </Row>
  );
}

export default Title;

