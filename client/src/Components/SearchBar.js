import React, { useState, useContext } from "react";

//icons
import { FiSearch } from "react-icons/fi";

// styles
import classes from "../styles/bookList.module.css";

//Context API
import { BookContext } from "../ContextApi";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const { setIsSearched, setCurrentPage, setSearchedInput, setBook } = useContext(BookContext);

  return (
    <div className={classes.searchBar}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        name='seacrText'
        className={classes.searchBoxInput}
        placeholder='Search'
      />
      <div className={classes.searchIcon}>
        <FiSearch
          onClick={() => {
            setCurrentPage(1);
            setBook(null);
            if (value !== "") {
              setIsSearched(true);
              setSearchedInput(value);
            } else {
              setIsSearched(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
