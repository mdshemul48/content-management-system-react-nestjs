import axiosInstance from "../../utility/axiosInstance";
import { login } from "../reducers/auth";

export const loginMethod = (loginInfo, callback) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/admin/login", {
      email: loginInfo.email,
      password: loginInfo.password,
    });
    dispatch(login({ token: data.access_token, user: data.user }));
    // eslint-disable-next-line no-undef
    localStorage.setItem("userInfo", JSON.stringify({ token: data.access_token, user: data.user }));
    callback();
  } catch (error) {
    const { data } = error.response;
    callback(data);
  }
};

export default "";
