import React from "react";
import { Button, Carousel } from "react-bootstrap";

import styles from "./HomeCarousel.module.css";

const HomeCarousel = ({ mostPopularPosts }) => (
  <Carousel>
    {mostPopularPosts.map((post) => (
      <Carousel.Item key={post.id}>
        <img
          className="d-block w-100"
          src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${post.cover}`}
          alt="First slide"
          width="1920"
          height="540"
        />
        <Carousel.Caption className={styles.homeCarousel}>
          <h1 className={`fw-bolder ${styles.homeCarouselTitle}`}>{post.name}</h1>
          <h2 className="mt-2">
            {post.categories.find((category) => category.type === "main").name} | {post.watchTime}
          </h2>
          <Button variant="danger" className={`rounded-0 mt-3 ${styles.homeCarouselWatchButton}`} size="lg">
            Watch Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default HomeCarousel;
