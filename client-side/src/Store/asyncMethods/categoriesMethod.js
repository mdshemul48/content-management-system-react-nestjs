/* eslint-disable import/prefer-default-export */
import { toast } from "react-hot-toast";
import { addCategory, deleteCategory, getCategories } from "../reducers/categories";
import axiosInstance from "../../utility/axiosInstance";

export const getCategoriesMethod = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/allCategoryInfo");
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
    const {
      data: { category },
    } = await axiosInstance.post("/admin/categoryCreate", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addCategory(category));
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
    await axiosInstance.delete(`/admin/categoryDelete/${item.id}`, {
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
