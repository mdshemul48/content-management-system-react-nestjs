import React from "react";
import { Button } from "react-bootstrap";

import styles from "./ArrowButton.module.css";

const ArrowButton = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...props} variant="outline-dark" className={`${styles.arrowButton} ms-1`}>
    {children}
  </Button>
);

export default ArrowButton;
