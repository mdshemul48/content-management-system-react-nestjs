import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import Pagination from "../CategoryPage/Pagination/Pagination";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search).get("q");

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get(`/search/${searchParams}`);
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
          {searchResult.map((item) => (
            <SinglePost item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default SearchPage;
