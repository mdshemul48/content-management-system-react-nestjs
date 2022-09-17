import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import AddNewCategoryModal from "./AddNewCategoryModal/AddNewCategoryModal";
import CategoryTable from "./CategoryTable/CategoryTable";

import { addNewCategoryMethod } from "../../../Store/asyncMethods/categoriesMethod";

const CategoryManage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategoryHandler = async ({ name, parentId }) => {
    const newCategory = { name, parent_id: parentId || null, type: parentId ? "subCategory" : "mainCategory" };

    dispatch(addNewCategoryMethod(newCategory, handleClose));
  };

  return (
    <Container fluid className="mt-2">
      <Button onClick={handleShow}>Add New Category</Button>
      <AddNewCategoryModal
        addCategoryHandler={addCategoryHandler}
        categories={categories}
        show={show}
        handleClose={handleClose}
      />

      <CategoryTable categories={categories} />
    </Container>
  );
};

export default CategoryManage;
