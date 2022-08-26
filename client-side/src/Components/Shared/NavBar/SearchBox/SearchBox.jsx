import React, { useState } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchBox.module.css";

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
    <Form className="d-flex ms-auto" onSubmit={onSubmitHandler}>
      <FormControl
        type="search"
        placeholder="Search"
        className={`me-2 ${styles.searchBox}`}
        aria-label="Search"
        name="searchBox"
        onChange={onChangeHandler}
      />
      <Button variant="outline-danger" type="submit" className={`rounded-circle py-2 ${styles.navBar_search_button}`}>
        <FaSearch />
      </Button>
    </Form>
  );
};

export default SearchBox;
