import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoryPage from "./Components/Client/CategoryPage/CategoryPage";
import Home from "./Components/Client/HomePage/Home";
import NavBar from "./Components/Shared/NavBar/NavBar";
import ContentPage from "./Components/Client/ContentPage/ContentPage";

import LoginPage from "./Components/Login/LoginPage";
import AdminHomePage from "./Components/Admin/AdminHomePage/AdminHomePage";

import useAuthHook from "./Hooks/useAuthHook";
import UserContext from "./Context/UserContext";

import RequireAuth from "./Components/Routes/RequireAuth";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const user = useAuthHook();
  return (
    <UserContext.Provider value={user}>
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

            <Route path="/admin">
              <Route
                index
                element={
                  <RequireAuth>
                    <AdminHomePage />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <p className="bg-dark text-white mb-0 py-2 text-center mt-2 ">POWERED & DEVELOPED BY YETFIX.COM</p>
      </>
    </UserContext.Provider>
  );
}

export default App;
