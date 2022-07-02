/* eslint-disable no-undef */
import { useState } from "react";
import axiosInstance from "../utility/axiosInstance";

const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")));

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/admin/login", {
        email,
        password
      });
      console.log(response);
    } catch (err) {
      return err;
    }
  };
  const logout = () => {};
  return { user, login, logout };
};

export default useAuth;
