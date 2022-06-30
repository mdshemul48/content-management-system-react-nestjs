import React from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Components/Client/Client";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryPage from "./Components/Client/CategoryPage/CategoryPage";
import Home from "./Components/Client/Home/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";

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
