import React from "react";
import { Routes, Route } from "react-router-dom";
import Client from "./Components/Client/Client";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Client />} exact />
    </Routes>
  );
}

export default App;
