import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SinglePost.module.css";

function SinglePost({ item: { image, name, quality, id } }) {
  return (
    <Col xxl={2}>
      <div className={`rounded ${styles.singlePost_card} p-1 m-1`}>
        <Link to={`/content/${id}`} className="text-decoration-none">
          <div className="overflow-hidden d-flex justify-content-center  align-items-end rounded">
            <img
              src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${image}`}
              className={`${styles.singlePost_image} rounded`}
              alt=""
            />
            <div className={`text-center ${styles.singlePost_text}`}>
              <h3 className="fs-5 text-white">{name}</h3>
              <p className="text-white">Quality : {quality}</p>
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
