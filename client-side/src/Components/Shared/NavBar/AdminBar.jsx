import React from "react";

import { Dropdown } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import useUser from "../../../Hooks/useUser";

function AdminBar() {
  const navigate = useNavigate();

  const { user, logout } = useUser();
  console.log(user);

  const logoutHandler = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    user && (
      <Dropdown className="ms-2 me-5">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FaUserAlt className="fs-4 text-secondary" />
          <span className="ms-1">{user?.user?.name}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/admin">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item href="#">Add New Post</Dropdown.Item>
          <Dropdown.Item href="#">Users</Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
}

export default AdminBar;
