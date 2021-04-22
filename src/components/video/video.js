import React from "react";
import ReactPlayer from "react-player/lazy";
import "./video.css";
import { Row, Col } from "reactstrap";
function Video() {
  return (
      <Row>
        <Col>
          <div className="skate">
            <div className="embed-responsive embed-responsive-16by9">
              <ReactPlayer
                title="Brailleman"
                width="100%"
                height="100%"
                url="https://www.youtube.com/embed/Y88fJdH9xag"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              />
            </div>
          </div>
        </Col>
      </Row>
  );
}

export default Video;
