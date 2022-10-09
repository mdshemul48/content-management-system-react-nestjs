import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utility/axiosInstance";
import SinglePost from "../../Shared/SinglePost/SinglePost";
import Pagination from "./Pagination/Pagination";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const { mainCategory: mainCategoryId, subCategory } = useParams();
  const [category, setCategory] = useState({ subCategory: [] });
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({});
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (categories) {
      const selectedCategory = categories.find((categoryI) => categoryI.id === parseInt(mainCategoryId, 10));
      setCategory(selectedCategory);
    }
  }, [categories, mainCategoryId]);

  const paginationHandler = (pageNo) => {
    setPage(pageNo);
  };

  // fetching post for category page.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/posts?categoryExact=${
            subCategory ? `${mainCategoryId},${subCategory}` : mainCategoryId
          }&page=${page}&order=desc`
        );
        setPosts(data.posts);
        setPaginationInfo({
          from: data.from,
          to: data.last_page,
          active: data.current_page,
        });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchData();
  }, [mainCategoryId, subCategory, page]);

  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">
        {subCategory
          ? category?.subCategory?.find((sub) => sub.id === parseInt(subCategory, 10))?.name
          : category?.name}
      </h1>
      {!subCategory && <SubCategories items={category?.subCategory} />}
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
