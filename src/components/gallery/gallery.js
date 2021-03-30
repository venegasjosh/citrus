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
import Trio1 from "../../images/helenst1.jpg";
import Dudes from "../../images/guys.JPG";
import Trio2 from "../../images/helenst2.jpg";
import Guitarist from "../../images/guitarist.jpg";
import Goose from "../../images/goose.JPG";
import Brick from "../../images/brick_and_morter.jpg";
import Experience from "../../images/experience.jpg";
import Granola from "../../images/granola.JPG";
import Dimensions from '../../images/dimensions.jpg'

const items = [
  {
    src: Trio1,
  },
  {
    src: Guitarist,
  },
  {
    src: Trio2,
  },
  {
    src: Dudes,
  },
  {
    src: Granola,
  },
  {
    src: Goose,
  },
  {
    src: Brick,
  },
  {
    src: Dimensions,
  },
  {
    src: Experience,
  },
  
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
        <img class="image img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
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
