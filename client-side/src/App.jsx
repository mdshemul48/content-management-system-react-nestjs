import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoryPage from "./Components/Client/CategoryPage/CategoryPage";
import Home from "./Components/Client/HomePage/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentPage from "./Components/Client/ContentPage/ContentPage";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "7rem" }}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="category/:mainCategory" element={<CategoryPage />}>
              <Route path=":subCategory" element={<CategoryPage />} />
            </Route>
            <Route path="content/:contentId" element={<ContentPage />} />
          </Route>
        </Routes>
      </div>
      <p className="bg-dark text-white mb-0 py-2 text-center mt-2 ">POWERED & DEVELOPED BY YETFIX.COM</p>
    </>
  );
}

export default App;
