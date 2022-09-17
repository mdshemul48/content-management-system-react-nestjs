import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import AddNewEntry from "./AddNewEntry";

const Parts = ({ postDetail, setPostDetail }) => {
  const { content } = postDetail;

  const onAddNewEpisodeHandler = (_, episode) => {
    setPostDetail({ ...postDetail, content: [...content, episode] });
  };

  const onReNameHandler = (index, event) => {
    const newContent = [...content];
    newContent[index].title = event.target.value;
    setPostDetail({ ...postDetail, content: newContent });
  };
  const onReDownloadLinkHandler = (index, event) => {
    const newContent = [...content];
    newContent[index].link = event.target.value;
    setPostDetail({ ...postDetail, content: newContent });
  };
  const onRemoveHandler = (index) => {
    // eslint-disable-next-line no-undef, no-alert
    const conform = window.confirm("Are you sure to remove this part?");
    if (!conform) return;
    const newContent = [...content];
    newContent.splice(index, 1);
    setPostDetail({ ...postDetail, content: newContent });
  };

  return (
    <section>
      <AddNewEntry onAddNewEpisodeHandler={onAddNewEpisodeHandler} seasonIndex={1} />
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
