import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axiosInstance from "../../../utility/axiosInstance";

import AddNewCategoryModal from "./AddNewCategoryModal/AddNewCategoryModal";
import CategoryTable from "./CategoryTable/CategoryTable";

const CategoryManage = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("/allCategoryInfo");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const addCategoryHandler = async ({ name, parentId }) => {
    const newCategory = { name, parent_id: parentId || null, type: parentId ? "subCategory" : "mainCategory" };
    try {
      const { date } = await axiosInstance.post("/admin/categoryCreate", newCategory);
      console.log(date);
    } catch (err) {
      console.log(err);
    }
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
