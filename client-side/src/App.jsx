import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import CategoryPage from "./Components/Client/CategoryPage/CategoryPage";
import Home from "./Components/Client/HomePage/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";
import ContentPage from "./Components/Client/ContentPage/ContentPage";
import SearchPage from "./Components/Client/SearchPage/SearchPage";

import LoginPage from "./Components/Login/LoginPage";
import AdminPanel from "./Components/Admin/AdminPanel";

import RequireAuth from "./Components/Routes/RequireAuth";

import { getCategoriesMethod } from "./Store/asyncMethods/categoriesMethod";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesMethod());
  }, []);
  return (
    <>
      <NavBar />
      <Toaster position="top-right" reverseOrder />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="category/:mainCategory" element={<CategoryPage />}>
            <Route path=":subCategory" element={<CategoryPage />} />
          </Route>
          <Route path="content/:contentId" element={<ContentPage />} />
        </Route>

        <Route
          path="/admin/*"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <p className="bg-dark text-white mb-0 py-2 text-center mt-2 ">POWERED & DEVELOPED BY YETFIX.COM</p>
    </>
  );
}

export default App;
