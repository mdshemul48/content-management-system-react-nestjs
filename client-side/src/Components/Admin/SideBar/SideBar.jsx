import React from "react";
import { Link } from "react-router-dom";

import { FaLightbulb, FaPlus, FaFolderOpen, FaTable, FaUsers } from "react-icons/fa";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

function SideBar() {
  return (
    <ProSidebar className="me-3">
      <Menu iconShape="square">
        <MenuItem icon={<FaLightbulb />}>
          <Link to="/admin">Dashboard</Link>
        </MenuItem>
        <MenuItem icon={<FaPlus />}>
          <Link to="/admin/addNewPost">Add New Post</Link>
        </MenuItem>
        <MenuItem icon={<FaTable />}>
          <Link to="/admin/posts">Posts</Link>
        </MenuItem>
        <MenuItem icon={<FaFolderOpen />}>
          {" "}
          <Link to="/admin/category">Categories</Link>
        </MenuItem>
        <MenuItem icon={<FaUsers />}>
          <Link to="/admin/users">Users</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;
