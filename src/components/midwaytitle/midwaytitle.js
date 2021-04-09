import React from "react";
import "./midwaytitle.css";
import { Row, Col, Jumbotron, Container } from "reactstrap";

function Midwaytitle() {
  return (
    <Container className="zala">
      <Row>
        <Col>
          <h4 className="acdc">biography:</h4>
        </Col>
        <Jumbotron>
          <p className="capsulecorp">
            Citrus Lover is a California born rock trio featuring Sidhartha Rai,
            Josh Venegas, and Alex Remiticado. Sid, the lead guitarist and
            singer-songwriter, takes inspiration from a variety of music from
            all sorts of cultures around the world. Josh, the bassist and
            singer-wongwriter, enoys blues, rock, and alternative music styles
            and even has roots in flamenco guitar and jazz trombone. On drums is
            Alex Remiticado, whose rhythmic prowess behind the kit is stemmed
            from his roots in classical & modern jazz (Black American Music),
            combined with heavy influence from genres such as funk, Greek folk
            music, and rock. During his high school years, Alex competed and
            performed at popular American jazz festivals such as the Monterey
            Jazz Festival and Essentially Ellington in New York City. The group
            officially formed in 2018 after Josh and Sid, who originally met at
            an open mic night in San Jose, linked with Alex through the musician
            networking app, Vampr.
          </p>
        </Jumbotron>
      </Row>
    </Container>
  );
}

export default Midwaytitle;
