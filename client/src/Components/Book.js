import React, { useContext } from "react";
import { BookContext } from "../ContextApi/index";

// STYLES
import classes from "../styles/bookList.module.css";

const Book = ({ book, refDetail }) => {
  const { id, setId, setOffSet } = useContext(BookContext);

  return (
    <div
      className={`${id === book.isbn13 && classes.selected} ${classes.bookContainer}`}
      onClick={(e) => {
        setOffSet(e.target.offsetTop);
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
