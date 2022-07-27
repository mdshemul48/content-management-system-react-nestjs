import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const { mainCategory: mainCategoryId, subCategory } = useParams();
  const [category, setCategory] = useState({ sub_category: [] });
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/getAllPostByCategory?page=1&mainCategory=${mainCategoryId ? mainCategoryId : ""}&subCategory=${
            subCategory ? subCategory : ""
          }`
        );
        setPosts(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [mainCategoryId, subCategory]);

  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">{category.name}</h1>
      {!subCategory && <SubCategories items={category.sub_category} />}
      <hr className="text-light" />
      <Container fluid>
        <Row>
          {posts.map((item) => (
            <SinglePost item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default CategoryPage;
