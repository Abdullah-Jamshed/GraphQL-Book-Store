import React, { useState } from "react";

//ICONS
import { FiMinus } from "react-icons/fi";

// STYLES
import classes from "../styles/bookList.module.css";

const AddBook = () => {
  const [toggle, setToggle] = useState(false);

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${toggle ? classes.addBookContainer : classes.addBookButton} ${classes.addBook}`}>
      {toggle ? (
        <div>
          <div className={classes.closeButton} onClick={() => setToggle(false)}>
            <FiMinus />
          </div>
          <form onSubmit={submit} className={classes.addBookForm}>
            <div className={classes.fields}>
              <input type='text' placeholder=' ' id='A1' />
              <label htmlFor='A1'>Book</label>
            </div>

            <div className={classes.fields}>
              <input type='text' placeholder=' ' id='A2' />
              <label htmlFor='A2'>Auther</label>
            </div>

            <div className={classes.fields}>
              <input type='text' placeholder=' ' id='A3' />
              <label htmlFor='A3'>Date</label>
            </div>
          </form>
        </div>
      ) : (
        <div
          onClick={() => {
            setToggle(true);
          }}>
          +
        </div>
      )}
    </div>
  );
};

export default AddBook;
