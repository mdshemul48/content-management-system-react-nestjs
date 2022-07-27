import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const cetagoryIds = useParams();
  const { mainCategory: mainCategoryId, subCategory } = cetagoryIds;
  const [category, setCategory] = useState({ sub_category: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`/getSubCategory/${mainCategoryId}`);
        setCategory(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [mainCategoryId]);

  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">{category.name}</h1>
      {!subCategory && <SubCategories items={category.sub_category} />}
      <hr className="text-light" />
      <Container fluid>
        <Row>
          {/* {category.sub_category.map((item) => (
            <SinglePost item={item} key={item.id} />
          ))} */}
          <SinglePost />
        </Row>
      </Container>
    </main>
  );
}

export default CategoryPage;
