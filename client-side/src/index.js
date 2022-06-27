import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
