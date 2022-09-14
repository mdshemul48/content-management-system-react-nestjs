import React, { useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import UpdateCategoryModal from "../UpdateCategoryModal/UpdateCategoryModal";

const SingleCategory = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UpdateCategoryModal handleClose={handleClose} show={show} />
      <tr>
        <td>{item.id}</td>
        <td>
          {item.type !== "mainCategory" && "── "}
          {item.name}
        </td>
        <td>{item.type}</td>
        <td>{item.createdBy}</td>
        <td>{moment(item.created_at).format("MMMM Do YYYY, h:mm:ss A")}</td>
        <td>
          <div>
            <Button variant="warning" className="me-1" onClick={handleShow}>
              Update
            </Button>
            <Button variant="danger">Delete</Button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default SingleCategory;
