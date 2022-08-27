import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import axiosInstance from "../../../utility/axiosInstance";

import "./MenuCategories.css";

function MenuCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/allCategoryInfo");
        const { data } = response;
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <NavDropdown title="Categories" id="navbarScrollingDropdown" className="text-uppercase">
      {categories.map((item) => (
        <NavDropdown.Item className="text-uppercase" as={Link} to={`/category/${item.id}`} key={item.id}>
          {item.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default MenuCategories;
