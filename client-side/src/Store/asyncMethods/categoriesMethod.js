/* eslint-disable import/prefer-default-export */
import { toast } from "react-hot-toast";
import { addCategory, getCategories } from "../reducers/categories";
import axiosInstance from "../../utility/axiosInstance";

export const getCategoriesMethod = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/allCategoryInfo");
    dispatch(getCategories(data));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addNewCategory = (data, callback) => async (dispatch, state) => {
  const {
    auth: { token },
  } = state();
  try {
    const res = await axiosInstance.post("/admin/categoryCreate", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addCategory(res.data));
    callback();
  } catch (error) {
    toast.error(error.message);
  }
};
