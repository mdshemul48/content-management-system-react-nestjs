import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddNewEpisode = ({ onAddNewEpisodeHandler, seasonIndex }) => {
  const [episode, setEpisodeHandler] = useState({
    title: "",
    link: "",
  });

  const onEpisodeNameChangeHandler = (event) => {
    setEpisodeHandler({ ...episode, title: event.target.value });
  };
  const onEpisodeDownloadLinkChangeHandler = (event) => {
    setEpisodeHandler({ ...episode, link: event.target.value });
  };

  const onAddNewEpisode = () => {
    onAddNewEpisodeHandler(seasonIndex, episode);
    setEpisodeHandler({ title: "", link: "" });
  };
  return (
    <Row className="mt-2">
      <Col>
        <Form.Control
          className="mb-1"
          type="text"
          placeholder="episode Name"
          onChange={onEpisodeNameChangeHandler}
          value={episode.title}
        />
      </Col>
      <Col>
        <Form.Control
          className="mb-1"
          type="text"
          placeholder="episode Download Link"
          onChange={onEpisodeDownloadLinkChangeHandler}
          value={episode.link}
        />
      </Col>
      <Col>
        <Button variant="dark" onClick={onAddNewEpisode}>
          Add New Episode
        </Button>
      </Col>
    </Row>
  );
};

export default AddNewEpisode;
