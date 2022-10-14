import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { updateCategory } from "../../../../Store/asyncMethods/categoriesMethod";

const UpdateCategoryModal = ({ show, handleClose, category }) => {
  const [categoryState, setCategoryState] = useState(category);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateCategory(categoryState, handleClose));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={onChangeHandler}
              name="name"
              type="text"
              placeholder="Category Name"
              value={categoryState.name}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateCategoryModal;
