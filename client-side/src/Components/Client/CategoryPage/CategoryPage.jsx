import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import Pagination from "./Pagination/Pagination";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const { mainCategory: mainCategoryId, subCategory } = useParams();
  const [category, setCategory] = useState({ sub_category: [] });
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});

  // getting sub category
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

  const paginationHandler = (pageNo) => {
    setPage(pageNo);
  };

  // fetching post for category page.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/getAllPostByCategory?page=1&mainCategory=${mainCategoryId ? mainCategoryId : ""}&subCategory=${
            subCategory ? subCategory : ""
          }`
        );

        setPosts(data.data);
        setPaginationInfo({
          from: data.from,
          to: data.last_page,
          active: data.current_page,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [mainCategoryId, subCategory, page]);

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
        <Pagination
          from={paginationInfo.from}
          to={paginationInfo.to}
          active={paginationInfo.active}
          paginationHandler={paginationHandler}
        />
      </Container>
    </main>
  );
}

export default CategoryPage;
