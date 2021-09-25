import React, { useState, useContext } from "react";

//icons
import { FiSearch } from "react-icons/fi";

// styles
import classes from "../styles/bookList.module.css";

//Context API
import { BookContext } from "../ContextApi";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const { setIsSearched, setSearchedInput } = useContext(BookContext);

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
            setIsSearched(true);
            setSearchedInput(value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
