import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Movie = ({ onChangeHandler, postDetail }) => (
  <Row>
    <Col lg={6}>
      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
        <Form.Control name="year" type="text" onChange={onChangeHandler} value={postDetail.year} />
      </Form.Group>
    </Col>
    <Col lg={6}>
      {postDetail.type !== "series" && (
        <Form.Group className="mb-3">
          <Form.Label>Download Link</Form.Label>
          <Form.Control name="downloadLink" type="text" onChange={onChangeHandler} value={postDetail.downloadLink} />
        </Form.Group>
      )}
    </Col>
    <Col lg={6}>
      <Form.Group className="mb-3">
        <Form.Label>Watch Time</Form.Label>
        <Form.Control name="WatchTime" type="text" onChange={onChangeHandler} value={postDetail.WatchTime} />
      </Form.Group>
    </Col>
    <Col lg={6}>
      <Form.Group className="mb-3">
        <Form.Label>Quality</Form.Label>
        <Form.Control name="quality" type="text" onChange={onChangeHandler} value={postDetail.quality} />
      </Form.Group>
    </Col>
  </Row>
);

export default Movie;
