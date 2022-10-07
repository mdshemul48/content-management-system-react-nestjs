import React from "react";
import { Routes, Route } from "react-router-dom";

import AddAndEditPost from "./AddAndEditPost/AddAndEditPost";
import CategoryManage from "./CategoryManage/CategoryManage";
import Dashboard from "./Dashboard/Dashboard";
import PostsManage from "./PostsManage/PostsManage";
import SideBar from "./SideBar/SideBar";

function AdminHomePage() {
  return (
    <main className="d-flex">
      <SideBar />
      <section className="bg-light w-100 me-2 rounded mt-2">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/addNewPost" element={<AddAndEditPost />} />
          <Route path="/posts" element={<PostsManage />} />
          <Route path="/edit/:postId" element={<AddAndEditPost />} />
          <Route path="/category" element={<CategoryManage />} />
        </Routes>
      </section>
    </main>
  );
}

export default AdminHomePage;
