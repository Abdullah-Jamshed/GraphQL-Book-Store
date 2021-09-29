import React, { useContext } from "react";
import { BookContext } from "../ContextApi";

import classes from "../styles/bookList.module.css";

const Pagination = ({ totalPage }) => {
  const { currentPage, setCurrentPage } = useContext(BookContext);

  return (
    <div className={classes.pagination}>
      <span className={`${currentPage === 1 && classes.disabled} ${classes.page}`} onClick={() => setCurrentPage(currentPage - 1)}>
        &#60;
      </span>
      {Array.from(Array(totalPage).keys())
        .slice(currentPage - 1, currentPage + 4)
        .map((val, i) => (
          <span key={i} className={`${currentPage === val + 1 && classes.currentPage}  ${classes.page}`} onClick={() => setCurrentPage(val + 1)}>
            {val + 1}
          </span>
        ))}
      <span
        className={`${totalPage === currentPage && classes.disabled}  ${classes.page}`}
        onClick={() => {
          if (currentPage !== totalPage) setCurrentPage(currentPage + 1);
        }}>
        &#62;
      </span>
    </div>
  );
};

export default Pagination;
