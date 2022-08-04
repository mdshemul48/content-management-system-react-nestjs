import React from "react";
import { Container, Row } from "react-bootstrap";
// import SinglePost from "../../../Shared/SinglePost/SinglePost";

function LatestUpload() {
  return (
    <Container className="mt-5" fluid>
      <h2 className="text-white">Latest Upload</h2>
      <hr />
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
