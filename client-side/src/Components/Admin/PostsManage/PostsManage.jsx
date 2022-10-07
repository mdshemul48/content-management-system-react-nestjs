import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

const PostsManage = () => {
  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "",
    limit: "10",
    order: "desc",
    subCategory: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <Container fluid>
      <h3 className="text-bold mt-2">Posts Manage</h3>
      <Row className="mt-4">
        <Col lg={2}>
          <Form.Select onChange={onChangeHandler} value={filter.order} name="order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Form.Select>
        </Col>
        <Col lg={2}>
          <Form.Select onChange={onChangeHandler} value={filter.limit} name="limit">
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </Form.Select>
        </Col>
        <Col lg={2}>
          <Form.Select onChange={onChangeHandler} value={filter.category} name="category">
            <option value="category">Category</option>
            <option value="1">Bangla</option>
            <option value="2">English</option>
            <option value="3">Tamil</option>
          </Form.Select>
        </Col>
        <Col lg={2}>
          <Form.Select onChange={onChangeHandler} value={filter.subCategory} name="subCategory">
            <option value="category">Sub category</option>
            <option value="1">Bangla</option>
            <option value="2">English</option>
            <option value="3">Tamil</option>
          </Form.Select>
        </Col>
        <Col lg={3}>
          {" "}
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={onChangeHandler}
            value={filter.searchTerm}
            name="searchTerm"
          />
        </Col>
        <Col lg={1}>
          <Button variant="dark">Search</Button>
        </Col>
      </Row>
      <hr />
      <Table striped bordered hover className="mt-3 rounded">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Name</th>
            <th>Tags</th>
            <th>Category</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>this is the title</td>
            <td>this is name</td>
            <td>this, thosflks, wekthsld, sldkfj,</td>
            <td>category</td>
            <td>admin</td>
            <td>
              <Button variant="warning">Edit</Button>
              <Button variant="dark" className="ms-1">
                View
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PostsManage;
