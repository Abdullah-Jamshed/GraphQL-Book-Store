import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";

const Book = ({ book }) => {
  return (
    <div className={classes.bookContainer}>
      <div className={classes.cover}>
        <img draggable="false" src={book.image} alt='book cover' />
      </div>
      <div className={classes.title}>{book.title}</div>
    </div>
  );
};

export default Book;
