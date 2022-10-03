import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import styles from "./Categories.module.css";

const Categories = ({ selectedCategories, setSelectedCategories }) => {
  const { categories } = useSelector((state) => state.categories);

  const onChangeHandler = (event) => {
    if (selectedCategories.includes(event.target.value)) {
      setSelectedCategories(selectedCategories.filter((category) => category !== event.target.value));
    } else {
      setSelectedCategories([...selectedCategories, event.target.value]);
    }
  };
  return (
    <Card className="mb-2">
      <Card.Header>Categories</Card.Header>
      <Card.Body className={`p-1 ${styles.categorySelectPage}`}>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li className="list-unstyled" key={category.id}>
              <label>
                <input
                  type="checkbox"
                  className="me-1 my-1"
                  onChange={onChangeHandler}
                  value={category.id}
                  checked={selectedCategories.includes(`${category.id}`)}
                />
                {category.name}s
              </label>
              <ul className={styles.selectedSubCategory}>
                {category.subCategory.map((subCategory) => (
                  <li className="list-unstyled" key={subCategory.id}>
                    <label>
                      <input
                        type="checkbox"
                        className="me-1 my-1"
                        onChange={onChangeHandler}
                        value={subCategory.id}
                        checked={selectedCategories.includes(`${subCategory.id}`)}
                      />
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
