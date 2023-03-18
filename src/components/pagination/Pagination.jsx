import React from "react";
import { getPagesArr } from "../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArr = getPagesArr(totalPages);

  return (
    <div className='pagePagination'>
      {pagesArr.map((p) => (
        <button
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page pageActive" : "page"}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
