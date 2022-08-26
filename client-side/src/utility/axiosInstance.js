import axios from "axios";

const accessToken = JSON.parse(localStorage.getItem("auth")) || {};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BACKEND_API,
  headers: {
    Authorization: `Bearer ${accessToken.access_token}`,
  },
});

export default axiosInstance;
