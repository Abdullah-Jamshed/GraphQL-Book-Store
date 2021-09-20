import React from "react";

import classes from "../styles/bookList.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <input type='text' name='seacrText' className={classes.searchBoxInput} placeholder='Search' />
      <div className={classes.searchIcon}></div>
    </div>
  );
};

export default SearchBar;
