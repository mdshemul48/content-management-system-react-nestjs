import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utility/axiosInstance";

import LatestUpload from "./LatestUpload/LatestUpload";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import LatestPostInCategory from "./LatestPostInCategory/LatestPostInCategory";

function Home() {
  const [homePagePosts, setHomePagePosts] = useState({ categoryPosts: [], latestPost: [], mostPopularPosts: [] });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axiosInstance.get("/home-page/getHomePagePosts");
      setHomePagePosts(data);
    };
    fetchPost();
  }, []);

  return (
    <main>
      <HomeCarousel mostPopularPosts={homePagePosts.mostPopularPosts} />
      <LatestUpload posts={homePagePosts.latestPost} />
      {homePagePosts.categoryPosts.map((categoryAndPosts) => (
        <LatestPostInCategory item={categoryAndPosts} key={categoryAndPosts.id} />
      ))}
    </main>
  );
}

export default Home;
