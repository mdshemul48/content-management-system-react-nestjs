import React from "react";
import { Container, Row } from "react-bootstrap";
// import SinglePost from "../../../Shared/SinglePost/SinglePost";

function LatestUpload() {
  return (
    <Container className="mt-5" fluid>
      <h1 className="text-white text-center bg-dark">Latest Upload</h1>
      <hr className="text-light" />
      <Row className="mt-1">
        {/* <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost /> */}
      </Row>
    </Container>
  );
}

export default LatestUpload;
