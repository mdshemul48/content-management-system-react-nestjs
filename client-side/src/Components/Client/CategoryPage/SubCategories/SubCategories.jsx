import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleSubCategory from "./SingleSubCategory";

function SubCategories({ items }) {
  return (
    <Container className="mt-2">
      <Row lg={6} md={3} sm={6} className="g-1">
        {items.map((item) => (
          <SingleSubCategory item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
}

export default SubCategories;
