import React, { useState } from "react";
import { Button, Tab, Table, Tabs } from "react-bootstrap";

const SeriesVideo = () => {
  const [key, setKey] = useState("season-1");

  return (
    <section className="bg-light mt-2 rounded p-2 w-75 mx-auto">
      {" "}
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="season-1" title="Season 1">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Episode Name</th>
                <th>Download URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="season-2" title="Season 3">
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Episode Name</th>
                <th>Download URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="season-3" title="Season 3">
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Episode Name</th>
                <th>Download URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Detective Conan Zeros Tea Time.S1.E1</td>
                <td>
                  {" "}
                  <Button variant="success">Download</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" className="px-4">
                    Play
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </section>
  );
};

export default SeriesVideo;
