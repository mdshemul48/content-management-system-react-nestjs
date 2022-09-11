import axiosInstance from "../../utility/axiosInstance";
import { login, logout } from "../reducers/auth";

export const loginMathod = (loginInfo) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/admin/login", {
      email: loginInfo.email,
      password: loginInfo.password,
    });
    dispatch(login({ token: data.access_token, user: data.user }));
    localStorage.setItem("userToken", { token: data.access_token, user: data.user });
  } catch (error) {
    alert("something went wrong while login");
  }
};

export default "";
