import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import ArrowButton from "../../../Shared/ArrowButton/ArrowButton";
// import SinglePost from "../../../Shared/SinglePost/SinglePost";

function LatestUpload() {
  return (
    <Container className="mt-5" fluid>
      <div className="d-flex justify-content-between">
        <h4 className="text-white fw-bold my-0">Latest Upload</h4>
        <div>
          <ArrowButton> {"<"} </ArrowButton>
          <ArrowButton> {">"} </ArrowButton>
        </div>
      </div>

      <hr className="m-0" />
      <hr className="text-light my-1" />
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
