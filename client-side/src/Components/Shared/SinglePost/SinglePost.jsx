import React from "react";
import { ButtonGroup, Col, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function SinglePost(props) {
  const {
    item: { title, image },
  } = props;
  console.log(image)
  return (
    <Col xxl={2}>
      <div className="border m-2 rounded" style={{ background: "#DDDDDD" }}>
        <Link to="/content/2" className="text-decoration-none">
          <div className="p-2">
            <img src={`${process.env.REAOCATICT_APP_IMAGE_FOLDER_LON}/${image}`} className="w-100" alt="" />
            <h6 className="text-dark mt-2 text-center p-1 ">{title}</h6>
          </div>
        </Link>
        <ButtonGroup className="w-100 p-1">
          <ToggleButton variant="danger" className="rounded-0">
            Play
          </ToggleButton>
          <ToggleButton variant="success" className="rounded-0">
            Download
          </ToggleButton>
        </ButtonGroup>
      </div>
    </Col>
  );
}

export default SinglePost;
