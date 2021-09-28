import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";

// COMPONENTS
import SearchBar from "./SearchBar";
import Books from "./Books";

const BookListSection = ({ refDetail }) => {
  return (
    <div className={classes.main}>
      <SearchBar />
      <Books refDetail={refDetail} />
    </div>
  );
};

export default BookListSection;
