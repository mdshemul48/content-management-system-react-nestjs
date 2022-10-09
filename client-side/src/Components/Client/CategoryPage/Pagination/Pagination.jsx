/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ to, active, paginationHandler }) {
  if (to === 1) return null;

  const paginationData = [];
  for (let i = 1; i <= to; i += 1) {
    paginationData.push(
      <li className={`page-item ${active === i ? "disabled" : ""}`}>
        <Button
          className="page-link"
          onClick={(event) => {
            event.preventDefault();
            paginationHandler(i);
          }}
        >
          {i}
        </Button>
      </li>
    );
  }
  return (
    <nav>
      <ul className="pagination pagination-md">{paginationData}</ul>
    </nav>
  );
}

export default Pagination;
