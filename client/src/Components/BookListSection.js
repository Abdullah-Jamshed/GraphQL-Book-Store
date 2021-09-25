import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";

// COMPONENTS
import SearchBar from "./SearchBar";
import Books from "./Books";
import AddBook from "./AddBook";

const BookListSection = ({ refDetail }) => {
  return (
    <div className={classes.main}>
      <SearchBar />
      <Books refDetail={refDetail} />
      <AddBook />
    </div>
  );
};

export default BookListSection;
