import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Home from "./Home/Home";

function Client() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Client;
