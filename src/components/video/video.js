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
              url={["https://www.youtube.com/embed/Y88fJdH9xag", "https://www.youtube.com/watch?v=xpgpHgCmNiY", "https://www.youtube.com/watch?v=J2wokDO1aDU", "https://www.youtube.com/watch?v=2jizahenETE", "https://www.youtube.com/watch?v=6T6iAx9qZIc",  "https://www.youtube.com/watch?v=Ijh2qn5K5KA" ]}
              title="Brailleman"
              width="100%"
              height="100%"
              frameborder="1"
              controls="true"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
             fallback="fallback"
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Video;
