import React from "react";
import { Button, Table } from "react-bootstrap";

const MultiVideoOrFiles = ({ content, type }) => (
  <section className="bg-light mt-2 rounded p-2 w-75 mx-auto">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Parts Name</th>
          <th>Download URL</th>
        </tr>
      </thead>
      <tbody>
        {content.map((episode) => (
          <tr>
            <td>{episode.title}</td>
            <td>
              {" "}
              <Button variant="success" target="_blank" download href={episode.link} rel="noreferrer">
                Download
              </Button>
            </td>{" "}
            {type === "multiVideo" && (
              <td>
                <Button variant="danger" className="px-4">
                  Play
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  </section>
);

export default MultiVideoOrFiles;
