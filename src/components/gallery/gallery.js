import React, { useState } from "react";
import "./gallery.css";
import {
  Jumbotron,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Band from "../../images/Tired_helen_st.jpg";
import Band2 from "../../images/band_shot_helen_st.jpg";
import Bag from "../../images/bag.jpg";
import Cit from "../../images/cit.jpg";
import Cit2 from "../../images/cit2.jpg";
import Cit3 from "../../images/cit3.jpg";
import Cit4 from "../../images/cit4.jpg";
import Drums from "../../images/drums_helen_st.jpg";
import Fly from "../../images/fly.jpg";
import Group from "../../images/group_jungle.jpg";
import Happy from "../../images/happy.jpg";
import Josh from "../../images/Josh _ alex_helen_st.jpg";
import Log from "../../images/log.jpg";
import Oz from "../../images/oz.jpg";
import Sid from "../../images/Sid_and_Josh_helen_st.jpg";
import Sit from "../../images/sit.jpg";

const items = [
  {
    src: Happy,
  },
  {
    src: Band2,
  },
  {
    src: Cit,
  },
  {
    src: Cit2,
  },
  {
    src: Cit3,
  },
  {
    src: Cit4,
  },
  {
    src: Drums,
  },
  {
    src: Group,
  },
  {
    src: Josh,
  },
  {
    src: Sid,
  },
  {
    src: Bag,
  },
  {
    src: Log,
  },
  {
    src: Band,
  },
  {
    src: Oz,
  },

  {
    src: Fly,
  },

  {
    src: Sit,
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
        <div className="image-wrap">
          <img className="fred" src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="projector">
      <Jumbotron className="sal" fluid>
        <div className="fancy-border">
          <Carousel
            id="myCarousel"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="car"
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
        </div>
      </Jumbotron>
    </div>
  );
};
export default Gallery;
