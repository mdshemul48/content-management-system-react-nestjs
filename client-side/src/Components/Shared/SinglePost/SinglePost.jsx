import React from "react";
import { ButtonGroup, Col, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./SinglePost.module.css";

function SinglePost(props) {
<<<<<<< HEAD
  const {
    item: { title, image },
  } = props;
  console.log(image)
=======
  // const {
  //   item: { title, image },
  // } = props;
>>>>>>> d9acbb6979f0e1198ebdc6740dee77a372e985dd
  return (
    <Col xxl={2}>
      <div className="rounded" style={{ background: "#DDDDDD" }}>
        <Link to="/content/2" className="text-decoration-none">
<<<<<<< HEAD
          <div className="p-2">
            <img src={`${process.env.REAOCATICT_APP_IMAGE_FOLDER_LON}/${image}`} className="w-100" alt="" />
            <h6 className="text-dark mt-2 text-center p-1 ">{title}</h6>
=======
          <div className="overflow-hidden">
            <img
              src="https://streamo.vuejstemplate.com/images/product/movie-01.jpg"
              className={`w-100 ${styles.singlePost_image}`}
              alt=""
            />
>>>>>>> d9acbb6979f0e1198ebdc6740dee77a372e985dd
          </div>
        </Link>
      </div>
    </Col>
  );
}

export default SinglePost;
