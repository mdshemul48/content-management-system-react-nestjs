import React from "react";
import { FaLightbulb, FaPlus, FaFolderOpen, FaTable, FaUsers } from "react-icons/fa";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";

function SideBar() {
  return (
    <ProSidebar className="me-3">
      <Menu iconShape="square">
        <MenuItem icon={<FaLightbulb />}>Dashboard</MenuItem>
        <MenuItem icon={<FaPlus />}>Add New Post</MenuItem>
        <MenuItem icon={<FaTable />}>Posts</MenuItem>
        <MenuItem icon={<FaFolderOpen />}>Categories</MenuItem>
        <MenuItem icon={<FaUsers />}>Users</MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default SideBar;
