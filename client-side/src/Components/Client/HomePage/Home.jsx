import React from "react";
import LatestUpload from "./LatestUpload/LatestUpload";

import HomeCarousel from "./HomeCarousel/HomeCarousel";

function Home() {
  return (
    <main>
      <HomeCarousel />
      <LatestUpload />
    </main>
  );
}

export default Home;
