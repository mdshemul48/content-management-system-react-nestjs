/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ paginationInfo, paginationHandler }) {
  if (paginationInfo.pages === 1) return null;

  const paginationData = [];
  for (let i = 1; i <= paginationInfo.pages; i += 1) {
    paginationData.push(
      <li className={`page-item mx-1 ${paginationInfo.active === i ? "disabled" : ""}`}>
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
