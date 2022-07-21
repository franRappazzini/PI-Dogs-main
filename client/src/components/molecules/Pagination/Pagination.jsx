import React, { useState } from "react";

import { useEffect } from "react";

function Pagination({ page, setPage, totalPage }) {
  const [input, setInput] = useState(1);
  useEffect(() => {
    // page >= 1 && page <= totalPage && setPage(input);
    page < 0 && setPage(1);
    page > totalPage && setPage(totalPage);
    console.log("page");
  }, [page, setPage, totalPage, input]);

  function handleChange(e) {
    e.target.value && e.target.value >= 1 && setPage(e.target.value);
    setInput(e.target.value);
  }

  function nextPage() {
    setPage(page + 1);
    setInput(input + 1);
  }

  function previousPage() {
    setPage(page + 1);
    setInput(input + 1);
  }

  return (
    <section>
      <button onClick={previousPage} disabled={page <= 1 ? true : false}>
        back
      </button>
      <input
        type="number"
        min={1}
        max={22}
        value={input}
        onChange={handleChange}
      />
      <span>de {totalPage}</span>
      <button onClick={nextPage} disabled={page >= totalPage ? true : false}>
        next
      </button>
    </section>
  );
}

export default Pagination;
