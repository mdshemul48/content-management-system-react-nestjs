import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SinglePost.module.css";

function SinglePost({ item }) {
  const { imageSm, name, quality, id, year, title } = item;
  return (
    <Col xxl={2} lg={3} md={4} sm={6}>
      <div className={`rounded ${styles.singlePost_card} p-1 m-1`} title={title}>
        <Link to={`/content/${id}`} className="text-decoration-none">
          <div className="overflow-hidden d-flex justify-content-center  align-items-end rounded">
            <img
              src={`${process.env.REACT_APP_IMAGE_FOLDER_LOCATION}/${imageSm}`}
              className={`${styles.singlePost_image} rounded`}
              alt=""
              loading="lazy"
            />
            <div className={`text-center ${styles.singlePost_text}`}>
              <h3 className="fs-5 text-white">
                {name} {year && <span>({year})</span>}
              </h3>
              {quality && <p className="text-white">Quality : {quality}</p>}
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
