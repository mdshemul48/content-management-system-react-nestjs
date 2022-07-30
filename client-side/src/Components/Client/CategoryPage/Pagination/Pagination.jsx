import React from "react";

const Pagination = ({ from, to, active, paginationHandler }) => {
  if (to == 1) return null;

  const paginationData = [];
  for (let i = 1; i <= to; i++) {
    paginationData.push(
      <li class={`page-item ${active == i ? "" : ""}`}>
        <a
          class="page-link"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            paginationHandler(i);
          }}
        >
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ul class="pagination pagination-md">{paginationData}</ul>
    </nav>
  );
};

export default Pagination;
