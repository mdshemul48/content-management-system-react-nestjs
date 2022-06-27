import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleLatestPost from "./SingleLatestPost";

function LatestUpload() {
  return (
    <Container className="mt-5" fluid>
      <h1 className="text-white text-center ">Latest Upload</h1>
      <hr className="text-light" />
      <Row className="mt-1">
        <SingleLatestPost />
        <SingleLatestPost />
        <SingleLatestPost />
        <SingleLatestPost />
        <SingleLatestPost />
        <SingleLatestPost />
      </Row>
    </Container>
  );
}

export default LatestUpload;
