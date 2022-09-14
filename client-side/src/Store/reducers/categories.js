import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
};

const reducers = {
  getCategories: (state, action) => {
    state.categories = action.payload;
    return state;
  },
  addCategory: (state, action) => {
    const category = action.payload;
    if (category.type === "mainCategory") {
      state.categories.push(category);
    } else {
      // eslint-disable-next-line eqeqeq
      const parentCategory = state.categories.find((cat) => cat.id == category.parent_id);
      parentCategory.sub_category.push(category);
    }
    return state;
  },
  deleteCategory: (state, action) => {
    const category = action.payload;
    if (category.type === "mainCategory") {
      // eslint-disable-next-line eqeqeq
      if (category.sub_category.length === 0) {
        // eslint-disable-next-line eqeqeq
        const filteredCategories = state.categories.filter((cat) => cat.id != category.id);
        state.categories = filteredCategories;
      }
    } else {
      // eslint-disable-next-line eqeqeq
      const parentCategory = state.categories.find((cat) => cat.id == category.parent_id);
      // eslint-disable-next-line eqeqeq
      const filteredSubCategories = parentCategory.sub_category.filter((cat) => cat.id != category.id);
      parentCategory.sub_category = filteredSubCategories;
    }
    return state;
  },
  updateCategory: (state, action) => {
    const { id, name } = action.payload;
    const targetCategory = state.categories.find((category) => category.id === id);
    targetCategory.name = name;
    return state;
  },
};

const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers,
});

export const { getCategories, addCategory, deleteCategory, updateCategory } = categoriesReducer.actions;

export default categoriesReducer.reducer;
