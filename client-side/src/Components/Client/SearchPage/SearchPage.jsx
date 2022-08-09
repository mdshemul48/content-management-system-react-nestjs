import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search).get("q");

  useEffect(() => {}, []);

  return (
    <main>
      <h1 className="text-light text-center my-3 bg-dark py-1">{searchParams}</h1>
    </main>
  );
};

export default SearchPage;
