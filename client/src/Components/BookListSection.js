import React, { useState } from "react";

// STYLES
import classes from "../styles/bookList.module.css";

// COMPONENTS
import SearchBar from "./SearchBar";
import Books from "./Books";
import AddBook from "./AddBook";

const BookListSection = () => {
  return (
    <div className={classes.main}>
      <SearchBar />
      <Books />
      <AddBook  />
    </div>
  );
};

export default BookListSection;
