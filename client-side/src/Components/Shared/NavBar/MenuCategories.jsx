import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./MenuCategories.css";

function MenuCategories() {
  const { categories } = useSelector((state) => state.categories);
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
