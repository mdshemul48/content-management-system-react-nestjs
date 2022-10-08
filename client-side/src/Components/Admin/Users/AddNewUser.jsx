import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utility/axiosInstance";

const AddNewUser = ({ setUsers }) => {
  const { auth } = useSelector((state) => state);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (details.password !== details.confirmPassword) {
      // eslint-disable-next-line no-alert, no-undef
      return alert("Passwords do not match");
    }

    try {
      const { data } = await axiosInstance.post("/users", details, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      setUsers((prev) => [...prev, data]);
      toast.success("User added successfully");
      handleClose();
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        error.response.data.forEach((err) => toast.error(err.message));
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {details.password !== details.confirmPassword && <Alert variant="danger">Password not matched.</Alert>}
            <Form.Group className="mb-1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name"
                onChange={handleChange}
                value={details.name}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
                value={details.email}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={details.password}
                name="password"
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password Again</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={details.confirmPassword}
                name="confirmPassword"
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
    </>
  );
};

export default AddNewUser;
