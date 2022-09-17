import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddNewEpisode = ({ onAddNewEpisodeHandler, seasonIndex }) => {
  const [episodeCount, setEpisodeCount] = useState(1);

  const onAddNewEpisode = () => {
    for (let i = 0; i < episodeCount; i += 1) {
      onAddNewEpisodeHandler(seasonIndex, { title: "", link: "" });
    }
    setEpisodeCount(1);
  };

  const onEpisodeCountChangeHandler = (event) => {
    setEpisodeCount(event.target.value);
  };

  return (
    <Row className="mt-2">
      <Col lg={2}>
        <Form.Control
          className="mb-1"
          type="Number"
          placeholder="Episode Empty box in the end"
          value={episodeCount}
          onChange={onEpisodeCountChangeHandler}
        />
      </Col>
      <Col>
        <Button variant="dark" onClick={onAddNewEpisode}>
          Add Empty Box for Episode
        </Button>
      </Col>
    </Row>
  );
};

export default AddNewEpisode;
