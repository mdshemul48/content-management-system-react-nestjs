import React, { useState } from "react";
import { FormControl, Form, Button, Row, Col } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchBox.module.css";
import SearchBoxInput from "./SearchBoxInput";

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate({
      pathname: "search",
      search: createSearchParams({
        q: searchText,
      }).toString(),
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Row>
        <Col lg={11} sm={10} xs={10}>
          <SearchBoxInput setSearchQuery={setSearchText} />
        </Col>
        <Col lg={1} sm={2} xs={2}>
          <Button
            variant="outline-danger"
            type="submit"
            className={`rounded-circle py-2 ${styles.navBar_search_button}`}
          >
            <FaSearch />
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBox;
