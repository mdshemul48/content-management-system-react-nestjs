import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";

const Series = () => {
  const [content, setContent] = useState([]);
  const [seasonName, setSeasonName] = useState("");

  console.log(content, seasonName);
  const onSeasonNameChangeHandler = (event) => {
    setSeasonName(event.target.value);
  };
  const onAddNewSeasonHandler = () => {
    setContent([...content, { seasonName, episodes: [] }]);
    setSeasonName("");
  };

  return (
    <section>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Season Name"
              onChange={onSeasonNameChangeHandler}
              value={seasonName}
            />
          </Col>
          <Col>
            <Button variant="dark" onClick={onAddNewSeasonHandler}>
              Add New Season
            </Button>
          </Col>
        </Row>
      </Form.Group>
      <Tabs>
        <Tab eventKey="Season-1" title="Season 1">
          season 1
        </Tab>{" "}
        <Tab eventKey="Season-2" title="Season 2">
          season 2
        </Tab>
      </Tabs>
    </section>
  );
};

export default Series;
