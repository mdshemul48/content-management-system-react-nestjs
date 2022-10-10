/* eslint-disable import/prefer-default-export */
import { toast } from "react-hot-toast";
import { addCategory, deleteCategory, getCategories } from "../reducers/categories";
import axiosInstance from "../../utility/axiosInstance";

export const getCategoriesMethod = () => async (dispatch, state) => {
  const {
    auth: { token },
  } = state();
  try {
    const { data } = await axiosInstance.get(token ? "/admin/categories" : "/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getCategories(data));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addNewCategoryMethod = (data, callback) => async (dispatch, state) => {
  const {
    auth: { token },
  } = state();
  try {
    const response = await axiosInstance.post("/categories", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addCategory(response.data));
    callback();
    toast.success("Category Added");
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteCategoryMethod = (item, callback) => async (dispatch, state) => {
  const {
    auth: { token },
  } = state();
  try {
    await axiosInstance.delete(`/categories/${item.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(deleteCategory(item));
    callback();
    toast.success("Category Deleted");
  } catch (error) {
    toast.error(error.message);
  }
};
