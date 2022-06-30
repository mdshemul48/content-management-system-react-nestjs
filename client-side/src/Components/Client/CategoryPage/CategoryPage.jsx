import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();
  console.log(params);
  return <h1>hello world</h1>;
}

export default CategoryPage;
