import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

import AxiosInstance from "../../../utility/axiosInstance";

import SingleCategory from "./SingleCategory/SingleCategory";

const CategoryManage = () => {
  const [categories, setCategories] = useState([]);

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
      <Button>Add New Category</Button>
      <Table striped bordered hover className="mt-3 rounded">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Created By</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => {
            console.log(item.sub_category);
            return [
              <SingleCategory key={item.id} item={item} />,
              item.sub_category.map((subItem) => <SingleCategory key={subItem.id} item={subItem} />),
            ];
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CategoryManage;
