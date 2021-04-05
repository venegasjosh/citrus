import React from "react";

import Entry from "../pages/entry";
import Bio from "../pages/bio/bio";

// router--------
import { Link} from "react-router-dom";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import ScrollToTop from './scroll/ScrollToTop'


function Links() {
  return (
      <Container className="links">
        <Row>
          <Col></Col>

          <Col>
            <Jumbotron className="pikachu">
              <div className="bg"></div>
              <div className="content">
                <h1>
                  {" "}
                  <a
                    href
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/artist/4S2bbNKVs4gqgSG4hacbnu"
                      )
                    }
                  >
                    Listen
                  </a>
                </h1>
              </div>
            </Jumbotron>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Jumbotron className="charmander">
            <Container>
              <h1>
                <a
                  href
                  onClick={() =>
                    window.open(
                      "https://citruslover.bandcamp.com/album/citrus-lover"
                    )
                  }
                >
                  Buy Music
                </a>
              </h1>
            </Container>
          </Jumbotron>
        </Row>

        <Row>
          <Jumbotron className="bulb" fluid>
            <Container>
              <h1>
                <a
                  href
                  onClick={() =>
                    window.open("https://www.bonfire.com/store/citruslover/")
                  }
                >
                  Merch
                </a>
              </h1>
            </Container>
          </Jumbotron>
        </Row>
        <Row>
          <Jumbotron className="cow" fluid>
            <Container>
              <h1>
              
                <Link to="/bio">Bio</Link>
              </h1>
            </Container>
          </Jumbotron>
        </Row>

        <Row>
          <Jumbotron className="chicken" fluid>
            <Container>
              <h1>
                <Link to="/contact">Contact</Link>
              </h1>
            </Container>
          </Jumbotron>
        </Row>
      </Container>

       
  );
}

export default Links;
