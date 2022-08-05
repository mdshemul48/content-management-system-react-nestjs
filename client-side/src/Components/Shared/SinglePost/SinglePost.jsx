import React from "react";
import { Button, ButtonGroup, Col, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SinglePost.module.css";

function SinglePost(props) {
  // const {
  //   item: { title, image },
  // } = props;
  return (
    <Col xxl={2}>
      <div className={`rounded ${styles.singlePost_card} p-1 m-1`}>
        <Link to="/content/2" className="text-decoration-none">
          <div className="overflow-hidden d-flex justify-content-center  align-items-end rounded">
            <img
              src="https://streamo.vuejstemplate.com/images/product/comedy-series-1.png"
              className={`w-100 ${styles.singlePost_image} rounded`}
              alt=""
            />
            <div className={`text-center ${styles.singlePost_text}`}>
              <h3 className="fs-5 text-white">The Lost Girl</h3>
              <p className="text-white">Quality : HD</p>
              <Button variant="danger" className="rounded-0 mb-2">
                Watch Now
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default SinglePost;
