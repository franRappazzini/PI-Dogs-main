import "./Pagination.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import React from "react";

function Pagination({ page, setPage, totalPage }) {
  function nextPage() {
    setPage(page + 1);
    window.scrollTo(0, 0);
  }

  function previousPage() {
    setPage(page - 1);
    window.scrollTo(0, 0);
  }

  return (
    <section className="pagination_container">
      <button onClick={previousPage} disabled={page <= 1 ? true : false}>
        <FaChevronLeft />
      </button>
      <p>
        <span className="text_page">{page}</span> de {totalPage}
      </p>
      <button onClick={nextPage} disabled={page >= totalPage ? true : false}>
        <FaChevronRight />
      </button>
    </section>
  );
}

export default Pagination;
