import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const { mainCategory: mainCategoryId } = useParams();
  const [category, setCategory] = useState({ sub_category: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get(`/admin/getSubCategory/${mainCategoryId}`);
      setCategory(data);
    };
    fetchData();
  }, [mainCategoryId]);

  console.log(category);
  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">{category.name}</h1>
      <SubCategories items={category.sub_category} />
      <hr className="text-light" />
      <Container fluid>
        <Row>
          {/* {category.sub_category.map(item => (
            <SinglePost item={item} key={item.id} />
          ))} */}
          <SinglePost />
        </Row>
      </Container>
    </main>
  );
}

export default CategoryPage;
