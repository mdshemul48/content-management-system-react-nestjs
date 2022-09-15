import React from "react";
import { Card, Form } from "react-bootstrap";
import placeHolderImage from "../../../../Assets/300x450.png";

const PosterImage = () => {
  console.log("hello world");
  return (
    <Card>
      <Card.Header>Poster Image</Card.Header>{" "}
      <Card.Body className="p-1">
        {" "}
        <img src={placeHolderImage} alt="poster" className="img-fluid mb-1 rounded" />
        <Form.Group controlId="formFile">
          <Form.Control type="file" size="sm" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default PosterImage;
