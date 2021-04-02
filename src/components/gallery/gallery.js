import React, { useState } from "react";

import "./gallery.css";
import {
  Jumbotron,
  Row,
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Algo from "../../images/algo.jpg";
import Arrow from "../../images/arrow.jpg";
import Brick from "../../images/brick_and_morter.jpg";
import Cambo from "../../images/cambriage.JPG";
import Cartoon from "../../images/cartoon.JPG";
import Chipper from "../../images/chipper.jpg";
import Coolio from "../../images/coolio.JPG";
import Defined from '../../images/defined.jpg';
import Dimensions from "../../images/dimensions.jpg";
import Duck from "../../images/duck.JPG";
import Dudes from "../../images/dudes.jpg";
import Evil from "../../images/evil.JPG";
import Experience from "../../images/experience.jpg";
import Guys from '../../images/guys.JPG';
import Howard from '../../images/howard.jpg';
import Nerf from "../../images/nerf.JPG";
import Rot from "../../images/rot.JPG";
import Salad from "../../images/salad.JPG";
import Sheep from "../../images/sheep.JPG";
import Stronghold from "../../images/stronghold.JPG";
import Superb from "../../images/superb.JPG";
import Tundra from "../../images/tundra.JPG";
import Was from "../../images/was.jpg";
import X_Sid from '../../images/x_Sid.jpg';
import X_Josh from '../../images/x_Josh.jpg';
import x_Alex from '../../images/x_alex.jpg';
import Vrothers from '../../images/vrothers.JPG'
import Victory from '../../images/victory.JPG'

const items = [
  {
    src: Algo
  },
  {
    src: Arrow
  },
  {
    src: Brick
  },
  {
    src: Cambo
  },
  {
    src: Cartoon
  },
  {
    src: Chipper
  },
  {
    src: Coolio
  },
  {
    src: Defined
  },
  {
    src: Dimensions
  },
  {
    src: Duck
  },
  {
    src: Evil
  },
  {
    src: Experience
  },
  {
    src: Guys
  },
  {
    src: Howard
  },
  {
    src: Nerf
  },
  {
    src: Rot
  },
  {
    src: Salad
  },
  {
    src: Sheep
  },
  {
    src: Stronghold
  },
  {
    src: Superb
  },
  {
    src: Vrothers
  },
  {
    src: Tundra
  },
  {
    src: Was
  },
  {
    src: x_Alex
  },
  {
    src: X_Josh
  },
  {
    src: X_Sid
  },
  {
    src: Victory
  }
  
  
];
const Gallery = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)} 
        onExited={() => setAnimating(false)}
        key={item.src}
      >
       <div class="image-wrap">
        <img class="image img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
        </div>
      </CarouselItem>
      
    );
  });

  return (
    <Container className="projector">
      <div>
        <Row>
          <Col>
            <Jumbotron>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                ride="carousel"

              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Gallery;
