import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

import Categories from "./Categories/Categories";

import styles from "./AddNewPost.module.css";
import PosterImage from "./PosterImage/PosterImage";

const AddNewPost = () => {
  const [publishOption, setPublishOption] = useState("movie");
  const [postDetail, setPostDetail] = useState({
    title: "",
    image: null,
    previewImage: null,
  });

  console.log(postDetail);
  const onChangeHandler = (event) => {
    setPublishOption(event.target.value);
  };

  const onImageChangeHandler = (event) => {
    const file = event.target.files[0];
    // eslint-disable-next-line no-undef
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPostDetail({
        ...postDetail,
        image: file,
        previewImage: reader.result,
      });
    };
  };

  return (
    <main className="m-2 p-3">
      <section>
        <h4>Add New Post</h4>
        <Row>
          <Col lg={10} md={8}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" type="text" />
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
          <Col lg={10}>
            <Row>
              <Col lg={10}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" />
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control name="year" type="text" />
                </Form.Group>
              </Col>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Download Link</Form.Label>
                  <Form.Control name="downloadLink" type="text" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Watch Time</Form.Label>
                  <Form.Control name="WatchTime" type="text" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Quality</Form.Label>
                  <Form.Control name="quality" type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col lg={2}>
            <Categories />
            <PosterImage onImageChangeHandler={onImageChangeHandler} image={postDetail.previewImage} />
          </Col>
        </Row>
      </section>
    </main>
  );
};
export default AddNewPost;
