import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import AddNewEntry from "./AddNewEntry";

const Series = ({ content, setContent }) => {
  const [seasonName, setSeasonName] = useState("");

  const onSeasonNameChangeHandler = (event) => {
    setSeasonName(event.target.value);
  };
  const onAddNewSeasonHandler = () => {
    setContent([...content, { seasonName, episodes: [] }]);
    setSeasonName("");
  };

  const onAddNewEpisodeHandler = (seasonIndex, episodes) => {
    const newContent = [...content];
    newContent[seasonIndex].episodes.push(episodes);
    setContent(newContent);
  };

  const onEpisodeReNameHandler = (seasonIndex, episodeIndex, event) => {
    const newContent = [...content];
    newContent[seasonIndex].episodes[episodeIndex].title = event.target.value;
    setContent(newContent);
  };
  const onEpisodeReDownloadLinkHandler = (seasonIndex, episodeIndex, event) => {
    const newContent = [...content];
    newContent[seasonIndex].episodes[episodeIndex].link = event.target.value;
    setContent(newContent);
  };

  const onRemoveEpisodeHandler = (seasonIndex, episodeIndex) => {
    // eslint-disable-next-line no-undef, no-alert
    const conform = window.confirm("Are you sure to remove this episode?");
    if (!conform) return;
    const newContent = [...content];
    newContent[seasonIndex].episodes.splice(episodeIndex, 1);
    setContent(newContent);
  };
  const onRemoveSeasonHandler = (seasonIndex) => {
    // eslint-disable-next-line no-undef, no-alert
    const conform = window.confirm("Are you sure to remove this season?");
    if (!conform) return;
    const newContent = [...content];
    newContent.splice(seasonIndex, 1);
    setContent(newContent);
  };

  return (
    <section>
      <Card className="p-2">
        <Form.Group className="mb-3">
          <Row>
            <Col lg={3}>
              <Form.Control
                type="text"
                placeholder="Season Name"
                onChange={onSeasonNameChangeHandler}
                value={seasonName}
              />
            </Col>
            <Col lg={2}>
              <Button variant="success" onClick={onAddNewSeasonHandler} className="w-100">
                Add New Season
              </Button>
            </Col>
            <Col lg={1}>
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  Delete Season
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {content.map((season, seasonIndex) => (
                    <Dropdown.Item onClick={() => onRemoveSeasonHandler(seasonIndex)} key={seasonIndex}>
                      {season.seasonName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Form.Group>

        <Tabs>
          {content.map((item, seasonIndex) => (
            <Tab eventKey={item.seasonName} title={item.seasonName} key={seasonIndex}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Download Link</th>
                  </tr>
                </thead>
                <tbody>
                  {item?.episodes?.map((episode, episodeIndex) => (
                    <tr key={episodeIndex}>
                      <td>{episodeIndex + 1}</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="episode Name"
                          onChange={(event) => onEpisodeReNameHandler(seasonIndex, episodeIndex, event)}
                          value={episode.title}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="episode Download Link"
                          onChange={(event) => onEpisodeReDownloadLinkHandler(seasonIndex, episodeIndex, event)}
                          value={episode.link}
                        />
                      </td>
                      <td>
                        {" "}
                        <Button variant="danger" onClick={() => onRemoveEpisodeHandler(seasonIndex, episodeIndex)}>
                          Remove
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <AddNewEntry onAddNewEpisodeHandler={onAddNewEpisodeHandler} seasonIndex={seasonIndex} />
            </Tab>
          ))}
        </Tabs>
      </Card>
    </section>
  );
};

export default Series;
