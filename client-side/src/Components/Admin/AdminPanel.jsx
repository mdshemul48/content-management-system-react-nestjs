import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryManage from "./CategoryManage/CategoryManage";
import Dashboard from "./Dashboard/Dashboard";
import SideBar from "./SideBar/SideBar";

function AdminHomePage() {
  return (
    <main className="d-flex">
      <SideBar />
      <section className="bg-light w-100 me-2 rounded">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="category" element={<CategoryManage />} />
        </Routes>
      </section>
    </main>
  );
}

export default AdminHomePage;
