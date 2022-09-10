import React, { useState } from "react";
import Button, { Dropdown, Form } from "react-bootstrap";

import styles from "./AddNewPost.module.css";

const AddNewPost = () => {
  const [publishOption, setPublishOption] = useState("movie");

  const onChangeHandler = (event) => {
    setPublishOption(event.target.value);
  };

  return (
    <main className="m-2">
      <section>
        <h4>Add New Post</h4>
        <Form.Select className={styles.selectPublishType} onChange={onChangeHandler}>
          <option value="movie">Movie</option>
          <option value="software">Software</option>
          <option value="game">Game</option>
          <option value="series">Series</option>
        </Form.Select>
        <hr className="my-1" />
      </section>
    </main>
  );
};
export default AddNewPost;
