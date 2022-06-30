import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleSubCategory() {
  return (
    <Col>
      <Card as={Link} to="3" className="text-decoration-none text-dark">
        English Movie 2021
      </Card>
    </Col>
  );
}

export default SingleSubCategory;
