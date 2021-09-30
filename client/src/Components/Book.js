import React, { useContext } from "react";
import { BookContext } from "../ContextApi/index";

// STYLES
import classes from "../styles/bookList.module.css";

const Book = ({ book, refDetail, index }) => {
  const { id, setId, setIndex, bookRef } = useContext(BookContext);

  return (
    <div
      ref={(el) => (bookRef.current[index] = el)}
      className={`${id === book.isbn13 && classes.selected} ${classes.bookContainer}`}
      onClick={(e) => {
        setIndex(index);
        // console.log(e.target.offsetTop);
        // setOffSet(e.target.offsetTop);
        if (window.innerWidth <= 760) {
          window.scrollTo({ top: refDetail.current.offsetTop });
        }
        setId(book.isbn13);
      }}>
      <div className={classes.cover}>
        <img draggable='false' src={book.image} alt='book cover' />
      </div>
      <div className={classes.title}>{book.title}</div>
    </div>
  );
};

export default Book;
