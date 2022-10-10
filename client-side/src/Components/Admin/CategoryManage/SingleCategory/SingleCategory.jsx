import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "react-bootstrap";
import UpdateCategoryModal from "../UpdateCategoryModal/UpdateCategoryModal";
import { deleteCategoryMethod } from "../../../../Store/asyncMethods/categoriesMethod";

const SingleCategory = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDeleteHandler = () => {
    // eslint-disable-next-line no-alert, no-undef
    const confirm = window.confirm("Are you sure you want to delete this category?");
    if (confirm) {
      dispatch(deleteCategoryMethod(item, handleClose));
    }
  };

  return (
    <>
      <UpdateCategoryModal handleClose={handleClose} show={show} category={item} />
      <tr>
        <td>{item.id}</td>
        <td>
          {item.type !== "main" && "── "}
          {item.name}
        </td>
        <td>{item.type}</td>
        <td>{item.createdBy.name}</td>
        <td>{moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss A")}</td>
        <td>
          <div>
            <Button variant="warning" className="me-1" onClick={handleShow}>
              Update
            </Button>
            <Button variant="danger" onClick={onDeleteHandler}>
              Delete
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default SingleCategory;
