import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleSubCategory from "./SingleSubCategory";

function SubCategories() {
  return (
    <Container className="mt-2">
      <Row lg={6} md={3} sm={6} className="g-1">
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
        <SingleSubCategory />
      </Row>
    </Container>
  );
}

export default SubCategories;
