import React from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./HomeCarousel.module.css";

const HomeCarousel = ({ mostPopularPosts }) => (
  <Carousel>
    {mostPopularPosts.map((post) => (
      <Carousel.Item key={post.id}>
        <img
          className={`d-block w-100 ${styles.homeCarouselImage}`}
          src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${post.cover}`}
          alt="First slide"
          width="1920"
          height="540"
        />
        <Link to={`/content/${post.id}`}>
          <Carousel.Caption className={styles.homeCarousel}>
            <Row>
              <Col lg={8} className={styles.homeCarouselTitle}>
                <div>
                  <h1 className={`fw-bolder ${styles.homeCarouselTitle}`}>{post.name}</h1>
                  <h2 className="mt-2">
                    {post.categories.find((category) => category.type === "main").name} | {post.watchTime}
                  </h2>
                  {post.quality && <h6>{post.quality}</h6>}
                  <Button variant="danger" className={`rounded-0 mt-3 ${styles.homeCarouselWatchButton}`} size="lg">
                    Watch Now
                  </Button>
                </div>
              </Col>
              <Col lg={4}>
                <div className={`p-1 bg-white d-inline-block rounded ${styles.homeCarouselPoster}`}>
                  <img
                    src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${post.imageSm}`}
                    className="rounded img-fluid"
                    alt={post.name}
                  />
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default HomeCarousel;
