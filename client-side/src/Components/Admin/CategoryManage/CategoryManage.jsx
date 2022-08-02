import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import AxiosInstance from "../../../utility/axiosInstance";
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
        const { data } = await AxiosInstance.get("/allCategoryInfo");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container fluid className="mt-2">
      <Button onClick={handleShow}>Add New Category</Button>
      <AddNewCategoryModal categories={categories} show={show} handleClose={handleClose} />

      <CategoryTable categories={categories} />
    </Container>
  );
};

export default CategoryManage;
