import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";

// COMPONENTS
import SearchBar from "./SearchBar";
import Books from "./Books";

const BookListSection = () => {
  return (
    <div className={classes.main}>
      <SearchBar />
      <Books />
    </div>
  );
};

export default BookListSection;
