import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utility/axiosInstance";
import Pagination from "../../Client/CategoryPage/Pagination/Pagination";

const PostsManage = () => {
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});

  const {
    auth,
    categories: { categories },
  } = useSelector((state) => state);
  const [filter, setFilter] = useState({
    searchTerm: "",
    category: "",
    limit: "10",
    order: "desc",
    subCategory: "",
  });

  const [posts, setPosts] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const paginationHandler = (pageNo) => {
    setPage(pageNo);
  };
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axiosInstance.get("/admin/posts", {
        params: {
          searchTerm: filter.searchTerm,
          categoryExact: filter.category && `${filter.category}${filter.subCategory ? `, ${filter.subCategory}` : ""}`,
          limit: filter.limit,
          order: filter.order,
          page,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setPosts(data.posts);
      setPaginationInfo(data.pagination);
    };
    fetch();
  }, [filter, page]);

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
            <option value="">select category</option>
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Form.Select>
        </Col>
        {filter.category && (
          <Col lg={2}>
            <Form.Select onChange={onChangeHandler} value={filter.subCategory} name="subCategory">
              <option value="">select sub category</option>
              {categories
                .find((category) => category.id === parseInt(filter.category, 10))
                .subCategory.map((subCategory) => (
                  <option value={subCategory.id}>{subCategory.name}</option>
                ))}
            </Form.Select>
          </Col>
        )}

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
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td width="25%">{post.title}</td>
              <td>{post.name}</td>
              <td>{post.tags}</td>
              <td>
                {post.categories.map((category) => (
                  <>
                    {" "}
                    <span key={category.id}>{category.name}</span>
                    <br />
                  </>
                ))}
              </td>
              <td>{post.createdBy.name}</td>
              <td>
                <Row>
                  <Col>
                    <Button variant="warning" className="w-100" as={Link} to={`/admin/edit/${post.id}`}>
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark" className="w-100" as={Link} to={`/content/${post.id}`}>
                      view
                    </Button>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination paginationInfo={paginationInfo} paginationHandler={paginationHandler} />
    </Container>
  );
};

export default PostsManage;
