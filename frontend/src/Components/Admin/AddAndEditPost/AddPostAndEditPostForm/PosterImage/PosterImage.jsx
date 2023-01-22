import React from "react";
import { Card, Form } from "react-bootstrap";
import placeHolderImage from "../../../../../Assets/300x450.png";

const PosterImage = ({ onImageChangeHandler, image, imageFile, cardTitle }) => (
  <Card className="mt-1">
    <Card.Header>{cardTitle}</Card.Header>{" "}
    <Card.Body className="p-1">
      {" "}
      <img
        src={
          (imageFile && image) ||
          (image && `${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${image}`) ||
          placeHolderImage
        }
        alt="poster"
        className="img-fluid mb-1 rounded"
      />
      <Form.Group controlId="formFile">
        <Form.Control type="file" size="sm" onChange={onImageChangeHandler} />
      </Form.Group>
    </Card.Body>
  </Card>
);

export default PosterImage;
