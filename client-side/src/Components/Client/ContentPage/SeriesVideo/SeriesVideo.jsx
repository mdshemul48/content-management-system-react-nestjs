import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";

function SeriesVideo({ content }) {
  const [key, setKey] = useState(content[0].seasonName);

  return (
    <section className="bg-light mt-2 rounded p-2 w-75 mx-auto">
      {" "}
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {content.map((season, index) => (
          <Tab eventKey={season.seasonName} title={season.seasonName}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Episode Name</th>
                  <th>Download URL</th>
                </tr>
              </thead>
              <tbody>
                {season.episodes.map((episode) => (
                  <tr>
                    <td>{episode.title}</td>
                    <td>
                      {" "}
                      <Button variant="success" target="_blank" download href={episode.link} rel="noreferrer">
                        Download
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button variant="danger" className="px-4">
                        Play
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}

export default SeriesVideo;
