import React from "react";
import ReactPlayer from 'react-player'
import { Container, Row, Col } from "reactstrap";
function Video() {
  return (
    <Container className="video">
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
         
            <ReactPlayer 
            title="Brailleman"
              width="560"
              height="315"
              url="https://www.youtube.com/embed/Y88fJdH9xag"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"

              />
             </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Video;
