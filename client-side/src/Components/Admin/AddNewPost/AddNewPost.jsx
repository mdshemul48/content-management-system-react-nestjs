import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import Categories from "./Categories/Categories";

import styles from "./AddNewPost.module.css";
import PosterImage from "./PosterImage/PosterImage";

const AddNewPost = () => {
  const [publishOption, setPublishOption] = useState("movie");

  const onChangeHandler = (event) => {
    setPublishOption(event.target.value);
  };

  return (
    <main className="m-2 p-3">
      <section>
        <h4>Add New Post</h4>
        <Row>
          <Col lg={10} md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col lg={2} md={4} className="align-items-end d-flex">
            {" "}
            <Form.Group className="mb-3 w-100">
              <Form.Select className={styles.selectPublishType} onChange={onChangeHandler}>
                <option value="movie">Movie</option>
                <option value="software">Software</option>
                <option value="game">Game</option>
                <option value="tutorial">Tutorial</option>
                <option value="series">Series</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={10}>THis is the +</Col>
          <Col lg={2}>
            <Categories />
            <PosterImage />
          </Col>
        </Row>
      </section>
    </main>
  );
};
export default AddNewPost;
