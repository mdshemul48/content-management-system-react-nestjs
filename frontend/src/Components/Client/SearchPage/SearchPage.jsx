import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState({ posts: [] });
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search).get("q");

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get(`/posts?searchTerm=${searchParams}&order=desc`);
      setSearchResult(data);
    };
    fetchPost();
  }, [search]);

  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">{searchParams}</h1>
      <hr className="text-light" />
      <Container fluid>
        <Row>
          {searchResult.posts.map((item) => (
            <SinglePost item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default SearchPage;
