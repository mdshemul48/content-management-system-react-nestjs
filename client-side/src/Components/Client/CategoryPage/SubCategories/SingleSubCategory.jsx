import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleSubCategory(props) {
  const { item } = props;
  return (
    <Col>
      <Card as={Link} to={`${item.id}`} className="text-decoration-none text-dark">
        {item.name}
      </Card>
    </Col>
  );
}

export default SingleSubCategory;
