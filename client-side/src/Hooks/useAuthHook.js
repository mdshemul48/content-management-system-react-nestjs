/* eslint-disable no-undef */
import { useState } from "react";
import axiosInstance from "../utility/axiosInstance";

const setUserLocalStorage = (user) => localStorage.setItem("auth", JSON.stringify(user));

const getUserLocalStorage = () => JSON.parse(localStorage.getItem("auth"));

const useAuth = () => {
  const [user, setUser] = useState(getUserLocalStorage());
  const login = async (email, password) => {
    const { data } = await axiosInstance.post("/admin/login", {
      email,
      password,
    });
    setUser(data);
    setUserLocalStorage(data);
  };
  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };
  return { user, login, logout };
};

export default useAuth;
