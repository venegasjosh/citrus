import React from "react";
import "./midwaytitle.css";
import { Row, Col, Jumbotron } from "reactstrap";

function Midwaytitle() {
  return (
    <Row>
      <Col>
        <h4 className="acdc">biography:</h4>
      </Col>
      <Jumbotron>
        <p className="capsulecorp">
          Citrus Lover is a California born trio featuring Sidhartha Rai, Josh
          Venegas, and Alex Remiticado. Sid, lead guitarist and
          singer-songwriter, takes inspiration from a broad category of world
          music of different cultures across time. His unique sound is rooted in
          Rock from his origins of Nepal. Josh, bassist and singer-songwriter,
          has a musical history in Flamenco guitar and Jazz trombone; also loves
          Blues, Rock, and alternative music styles. On drums is Alex
          Remiticado. His his rythmic prowess behind the kit is
          linked to his studies in classical & modern jazz. Along his journey,
          competitions have led him to exibit his skills at popular American
          Jazz festivals such as the The Monterey Jazz Festival and Essentially
          Ellington in New York. He also enjoys playing Funk, Greek folk music,
          and Rock. Through personal relationships and internet findings, the
          group finally formed in 2018.
        </p>
      </Jumbotron>
    </Row>
  );
}

export default Midwaytitle;
