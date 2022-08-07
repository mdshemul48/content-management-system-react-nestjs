import React from "react";
import { Button } from "react-bootstrap";

import styles from "./ArrowButton.module.css";

const ArrowButton = ({ children }) => (
  <Button variant="outline-dark" className={`${styles.arrowButton} ms-1`}>
    {children}
  </Button>
);

export default ArrowButton;
