import React from "react";
import { ButtonGroup, Col, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SinglePost.module.css";

function SinglePost(props) {
  // const {
  //   item: { title, image },
  // } = props;
  return (
    <Col xxl={2}>
      <div className="rounded" style={{ background: "#DDDDDD" }}>
        <Link to="/content/2" className="text-decoration-none">
          <div className="overflow-hidden">
            <img
              src="https://streamo.vuejstemplate.com/images/product/movie-01.jpg"
              className={`w-100 ${styles.singlePost_image}`}
              alt=""
            />
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default SinglePost;
