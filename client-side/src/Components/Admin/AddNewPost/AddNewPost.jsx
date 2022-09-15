import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";

import placeHolderImage from "../../../Assets/300x450.png";

import styles from "./AddNewPost.module.css";

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
            <Card className="mb-2">
              <Card.Header>Categories</Card.Header>
              <Card.Body className={`p-1 ${styles.categorySelectPage}`}>
                <ul className={styles.categoryList}>
                  <li className="list-unstyled">
                    <label>
                      <input type="checkbox" className="me-1" />
                      Hindi Movie
                    </label>
                    <ul>
                      <li className="list-unstyled">
                        <label>
                          <input type="checkbox" className="me-1" />
                          Hindi Movie 2018
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Featured</Card.Header>{" "}
              <Card.Body className="p-1">
                {" "}
                <img src={placeHolderImage} alt="poster" className="img-fluid mb-1 rounded" />
                <Form.Group controlId="formFile">
                  <Form.Control type="file" size="sm" />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};
export default AddNewPost;
