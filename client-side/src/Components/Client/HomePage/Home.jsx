import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utility/axiosInstance";

import LatestUpload from "./LatestUpload/LatestUpload";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import LatestPostInCategory from "./LatestPostInCategory/LatestPostInCategory";

function Home() {
  const [categoryWithPost, setCategoryWithPost] = useState({ categoryPosts: [], latestPost: [] });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get("/home-page/getHomePagePosts");
      setCategoryWithPost(data);
    };
    fetchPost();
  }, []);

  return (
    <main>
      <HomeCarousel />
      <LatestUpload posts={categoryWithPost.latestPost} />
      {categoryWithPost.categoryPosts.map((categoryAndPosts) => (
        <LatestPostInCategory item={categoryAndPosts} key={categoryAndPosts.id} />
      ))}
    </main>
  );
}

export default Home;
