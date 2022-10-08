import React from "react";

import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../Store/reducers/auth";

function AdminBar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    user && (
      <Dropdown className="ms-2 me-5">
        <Dropdown.Toggle variant="light">
          <img src={`https://avatars.dicebear.com/api/bottts/:${user?.email}.svg`} width="30px" alt="" />
          <span className="ms-1">{user?.name}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/admin">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/addNewPost">
            Add New Post
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/users">
            Users
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
}

export default AdminBar;
