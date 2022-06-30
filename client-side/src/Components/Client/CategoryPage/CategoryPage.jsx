import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const params = useParams();
  console.log(params);
  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">Hindi Movies</h1>
      <SubCategories />
      <hr className="text-light" />
      <Container fluid>
        <Row>
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </Row>
      </Container>
    </main>
  );
}

export default CategoryPage;
