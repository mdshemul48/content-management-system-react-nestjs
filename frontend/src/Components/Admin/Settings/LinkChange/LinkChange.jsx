import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../../utility/axiosInstance";

const LinkChange = () => {
  const { auth } = useSelector((state) => state);

  const [links, setLinks] = useState({ fromLink: "", toLink: "" });
  const onChangeHandler = (event) => {
    setLinks({ ...links, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.promise(
      axiosInstance.patch(
        "/admin/changeUrl",
        {
          fromUrl: links.fromLink,
          toUrl: links.toLink,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ),
      {
        loading: "loading..",
        success: <p>successfully changed the links</p>,
        error: <p>something went wrong while changing url.</p>,
      }
    );
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>From Link</Form.Label>
        <Form.Control type="text" placeholder="Enter From Link" name="fromLink" onChange={onChangeHandler} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>From Link</Form.Label>
        <Form.Control type="text" placeholder="Enter To Link" name="toLink" onChange={onChangeHandler} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LinkChange;
