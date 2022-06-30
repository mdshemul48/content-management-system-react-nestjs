import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoryPage from "./Components/Client/CategoryPage/CategoryPage";
import Home from "./Components/Client/HomePage/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="category/:mainCategory" element={<CategoryPage />}>
            <Route path=":subCategory" element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
