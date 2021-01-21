import React from "react";

import { Container, Row, Col, Jumbotron } from "reactstrap";

function Links() {
  return (
    <Container className="links">
      <Row>
        <Col></Col>

        <Col>
          <Jumbotron className="pikachu">
          <div class="bg">
          </div>  
          <div class="content">
          <h1>Listen</h1>
          </div>
          
          </Jumbotron>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Jumbotron className="charmander">
          <Container>
            <h1>Buy Music</h1>
          </Container>
        </Jumbotron>
      </Row>

      <Row>
        <Jumbotron className="bulb" fluid>
          <Container>
            <h1>Merch</h1>
          </Container>
        </Jumbotron>
      </Row>


      

    </Container>
  );
}

export default Links;
