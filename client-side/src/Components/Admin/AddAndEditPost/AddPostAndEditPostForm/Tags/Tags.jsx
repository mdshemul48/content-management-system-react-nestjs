import React from "react";
import { Card, Form } from "react-bootstrap";

const Tags = ({ onChangeHandler, postDetail }) => (
  <Card className="mb-2">
    <Card.Header>Tags / Keywords</Card.Header>
    <Card.Body>
      <Form.Group>
        <Form.Control name="tags" type="text" onChange={onChangeHandler} value={postDetail.tags} />
      </Form.Group>
    </Card.Body>
  </Card>
);

export default Tags;
