import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import styles from "./Categories.module.css";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <Card className="mb-2">
      <Card.Header>Categories</Card.Header>
      <Card.Body className={`p-1 ${styles.categorySelectPage}`}>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li className="list-unstyled">
              <label>
                <input type="checkbox" className="me-1 my-1" />
                {category.name}
              </label>
              <ul className={styles.selectedSubCategory}>
                {category.sub_category.map((subCategory) => (
                  <li className="list-unstyled">
                    <label>
                      <input type="checkbox" className="me-1 my-1" />
                      {subCategory.name}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Categories;
