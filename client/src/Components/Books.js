import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";

// component
import Book from "./Book";

const Books = () => {
  return (
    <div className={classes.booksContainer}>
      {[...Array(10)].map((_, i) => (
        <Book key={i} />
      ))}
    </div>
  );
};

export default Books;
