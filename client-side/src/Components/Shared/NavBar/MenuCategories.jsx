import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function MenuCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/admin/allcategoryInfo");
        const {
          data: { category },
        } = response;
        setCategories(category);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

  return (
    <NavDropdown title="Categories" id="navbarScrollingDropdown" className="fw-bold text-dark text-uppercase">
      {categories.map((item) => (
        <NavDropdown.Item className="text-uppercase" as={Link} to={`/category/${item.id}`} key={item.id}>
          {item.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default MenuCategories;
