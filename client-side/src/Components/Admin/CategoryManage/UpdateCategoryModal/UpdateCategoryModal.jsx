import React from "react";
import { useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";

const UpdateCategoryModal = ({ show, handleClose, onSubmitHandler, onChangeHandler, category }) => {
  const { categories } = useSelector((state) => state.categories);
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
              value={category.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="parentId">
            <Form.Select name="parentId" onChange={onChangeHandler}>
              <option value="">Parent Category</option>
              {categories?.map((item) => (
                <option key={item.id} value={item.id} selected={category.parentId === item.id}>
                  {item.name}
                </option>
              ))}
            </Form.Select>
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
