import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddNewCategoryModal = ({ addCategoryHandler, categories, show, handleClose }) => {
  const [form, setForm] = useState({ name: "", parentId: "" });

  const onChangeHandler = (event) => {
    setForm((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await addCategoryHandler(form);
  };
  return (
    <Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={onChangeHandler} name="name" type="text" placeholder="Category Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="parentId">
            <Form.Select name="parentId" onChange={onChangeHandler}>
              <option value="">Parent Category</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
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
          <Button variant="primary" onClick={onSubmitHandler}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
};
export default AddNewCategoryModal;
