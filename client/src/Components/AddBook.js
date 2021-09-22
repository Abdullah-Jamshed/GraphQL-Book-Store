import React, { useState } from "react";

// STYLES
import classes from "../styles/bookList.module.css";

const AddBook = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? classes.addBookContainer : classes.addBookButton} ${classes.addBook}`}>
      {toggle ? <div onClick={() => setToggle(!toggle)}>-</div> : <div onClick={() => setToggle(!toggle)}>+</div>}
    </div>
  );
};

export default AddBook;
