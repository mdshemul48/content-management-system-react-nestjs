import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Movie = () => (
  <Row>
    <Col lg={6}>
      <Form.Group className="mb-3">
        <Form.Label>Year</Form.Label>
        <Form.Control name="year" type="text" />
      </Form.Group>
    </Col>
    <Col lg={6}>
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
);

export default Movie;
