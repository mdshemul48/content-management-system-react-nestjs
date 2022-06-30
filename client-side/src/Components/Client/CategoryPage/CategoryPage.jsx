import React from "react";
import { useParams } from "react-router-dom";
import SubCategories from "./SubCategories/SubCategories";

function CategoryPage() {
  const params = useParams();
  console.log(params);
  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">Hindi Movies</h1>
      <SubCategories />
      <hr className="text-light" />
    </main>
  );
}

export default CategoryPage;
