import { toast } from "react-hot-toast";
import axiosInstance from "../../utility/axiosInstance";
import { login } from "../reducers/auth";

export const loginMethod = (loginInfo, callback) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email: loginInfo.email,
      password: loginInfo.password,
    });
    dispatch(login({ token: data.access_token, user: data.user }));
    // eslint-disable-next-line no-undef
    localStorage.setItem("userInfo", JSON.stringify({ token: data.access_token, user: data.user }));
    callback();
  } catch (error) {
    const errorMessages = error.response.data.message;
    if (Array.isArray(errorMessages)) {
      errorMessages.forEach((message) => {
        toast.error(message);
      });
    } else {
      toast.error(errorMessages);
    }
  }
};

export default "";
