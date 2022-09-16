import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utility/axiosInstance";

import LatestUpload from "./LatestUpload/LatestUpload";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import LatestPostInCategory from "./LatestPostInCategory/LatestPostInCategory";

function Home() {
  const [categoryWithPost, setCategoryWithPost] = useState({ categoryPost: [], latestPost: [] });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get("/getHomePagePost");
      setCategoryWithPost(data);
    };
    fetchPost();
  }, []);

  return (
    <main>
      <HomeCarousel />
      <LatestUpload posts={categoryWithPost.latestPost} />
      {categoryWithPost.categoryPost.map((categoryAndPosts) => (
        <LatestPostInCategory item={categoryAndPosts} />
      ))}
    </main>
  );
}

export default Home;
