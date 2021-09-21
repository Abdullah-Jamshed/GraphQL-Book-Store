import React from "react";

//icons
import  {FiSearch}  from "react-icons/fi";

// styles
import classes from "../styles/bookList.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <input type='text' name='seacrText' className={classes.searchBoxInput} placeholder='Search' />
      <div className={classes.searchIcon}>
        <FiSearch onClick={()=>console.log("Aaa")} />
      </div>
    </div>
  );
};

export default SearchBar;
