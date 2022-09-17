import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import AddNewEntry from "./AddNewEntry";

const Parts = () => {
  const [content, setContent] = useState([]);

  const onAddNewEpisodeHandler = (_, episode) => {
    const newContent = [...content];
    newContent.push(episode);
    setContent(newContent);
  };

  const onReNameHandler = (index, event) => {
    const newContent = [...content];
    newContent[index].title = event.target.value;
    setContent(newContent);
  };
  const onReDownloadLinkHandler = (index, event) => {
    const newContent = [...content];
    newContent[index].link = event.target.value;
    setContent(newContent);
  };
  const onRemoveHandler = (index) => {
    // eslint-disable-next-line no-undef, no-alert
    const conform = window.confirm("Are you sure to remove this part?");
    if (!conform) return;
    const newContent = [...content];
    newContent.splice(index, 1);
    setContent(newContent);
  };

  return (
    <section>
      <AddNewEntry onAddNewEpisodeHandler={onAddNewEpisodeHandler} seasonIndex={0} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Download Link</th>
          </tr>
        </thead>
        <tbody>
          {content.map((part, partIndex) => (
            <tr key={partIndex}>
              <td>{partIndex + 1}</td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="Part Name"
                  value={part.title}
                  onChange={(event) => onReNameHandler(partIndex, event)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="Part Download Link"
                  value={part.link}
                  onChange={(event) => onReDownloadLinkHandler(partIndex, event)}
                />
              </td>
              <td>
                {" "}
                <Button variant="danger" onClick={() => onRemoveHandler(partIndex)}>
                  Remove
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Parts;
