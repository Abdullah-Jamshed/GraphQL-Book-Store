import React from "react";
import { usePagination, DOTS } from "../utils/usePagination";


import classes from "../styles/bookList.module.css";


const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div style={{ width: "100%" }}>
      <nav aria-label='Page navigation example text-center'>
        <ul className='pagination' style={{ margin: "0 auto", width: "max-content", cursor: "pointer" }}>
          <li className={`page-item ${currentPage === 1 && `disabled ${classes.disabled}`}`} onClick={onPrevious}>
            <a className='page-link' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </a>
          </li>

          {paginationRange.map((pageNumber) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <li className='page-item'>
                  <a className='page-link'>&#8230;</a>
                </li>
              );
            }

            // Render our Page Pills
            return (
              <li className='page-item'>
                <a
                  className='page-link'
                  style={{ background: `${currentPage === pageNumber && "#bebebe82"}` }}
                  onClick={() => onPageChange(pageNumber)}>
                  {pageNumber}
                </a>
              </li>
            );
          })}

          <li className={`page-item ${currentPage === lastPage && `disabled ${classes.disabled}`}`} onClick={onNext}>
            <a className='page-link' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

// <ul>
// {/* Left navigation arrow */}
// <li onClick={onPrevious}>
//   <div className='arrow left'>&#60;</div>
// </li>
// {paginationRange.map((pageNumber) => {
//   // If the pageItem is a DOT, render the DOTS unicode character
//   if (pageNumber === DOTS) {
//     return <li className='pagination-item dots'>&#8230;</li>;
//   }

//   // Render our Page Pills
//   return (
//     <li style={{ bacgroung: `${pageNumber === currentPage && "red"}` }} onClick={() => onPageChange(pageNumber)}>
//       {pageNumber}
//     </li>
//   );
// })}
// {/*  Right Navigation arrow */}
// <li onClick={onNext}>
//   <div className='arrow right'>&#62;</div>
// </li>
// </ul>
