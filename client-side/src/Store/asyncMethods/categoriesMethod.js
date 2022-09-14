/* eslint-disable import/prefer-default-export */
import { toast } from "react-hot-toast";
import { getCategories } from "../reducers/categories";
import axiosInstance from "../../utility/axiosInstance";

export const getCategoriesMethod = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/allCategoryInfo");
    dispatch(getCategories(data));
  } catch (error) {
    toast.error(error.message);
  }
};
