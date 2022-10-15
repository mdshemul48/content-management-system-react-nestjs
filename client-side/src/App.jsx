import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import NavBar from "./Components/Shared/NavBar/NavBar";
import RequireAuth from "./Components/Routes/RequireAuth";
import { getCategoriesMethod } from "./Store/asyncMethods/categoriesMethod";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = React.lazy(() => import("./Components/Client/HomePage/Home"));
const CategoryPage = React.lazy(() => import("./Components/Client/CategoryPage/CategoryPage"));
const AdminPanel = React.lazy(() => import("./Components/Admin/AdminPanel"));
const LoginPage = React.lazy(() => import("./Components/Login/LoginPage"));
const SearchPage = React.lazy(() => import("./Components/Client/SearchPage/SearchPage"));
const ContentPage = React.lazy(() => import("./Components/Client/ContentPage/ContentPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesMethod());
  }, []);
  return (
    <>
      <NavBar />
      <Toaster position="top-right" reverseOrder />
      <Suspense fallback={<div>loading</div>}>
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
      </Suspense>
      <p className="bg-dark text-white mb-0 py-2 text-center mt-2 ">POWERED & DEVELOPED BY YETFIX.COM</p>
    </>
  );
}

export default App;
