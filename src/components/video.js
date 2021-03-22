import React from "react";

import { Container, Row, Col } from "reactstrap";

function Video() {
  return (
    <Container className="video">
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
            title="Brailleman"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Y88fJdH9xag"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
