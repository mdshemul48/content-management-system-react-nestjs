/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ paginationInfo, paginationHandler }) {
  return (
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      pageCount={paginationInfo.pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(event) => paginationHandler(event.selected)}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
}

export default Pagination;
