import React from "react";
import { Button, Carousel } from "react-bootstrap";

import styles from "./HomeCarousel.module.css";

const HomeCarousel = () => {
  console.log("gg");
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://streamo.vuejstemplate.com/images/slider/slider-hm4-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className={styles.homeCarousel}>
          <h1 className={`fw-bolder ${styles.homeCarouselTitle}`}>The Lost Girl</h1>
          <h2 className="mt-2">Hindi Movie | 1hr 45minutes</h2>
          <Button variant="danger" className={`rounded-0 mt-3 ${styles.homeCarouselWatchButton}`} size="lg">
            Watch Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://streamo.vuejstemplate.com/images/slider/slider-hm4-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.homeCarousel}>
          <h1 className={`fw-bolder ${styles.homeCarouselTitle}`}>Land And Sea</h1>
          <h2 className="mt-2">English Movie | 2hr 45minutes</h2>
          <Button variant="danger" className={`rounded-0 mt-3 ${styles.homeCarouselWatchButton}`} size="lg">
            Watch Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
