import React from "react";

// STYLES
import classes from "../styles/bookList.module.css";
const AddBookForm = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit} className={classes.addBookForm}>
      <div className={classes.field}>
        <input autoComplete='off' type='text' name='title' placeholder=' ' id='A1' />
        <label htmlFor='A1'>Book</label>
      </div>

      <div className={classes.field}>
        <input autoComplete='off' type='text' name='author' placeholder=' ' id='A2' />
        <label htmlFor='A2'>Author</label>
      </div>

      <div className={classes.field}>
        <input autoComplete='off' type='text' placeholder=' ' name='subtitle' id='A3' />
        <label htmlFor='A3'>subtitle</label>
      </div>

      <div className={`${classes.field} ${classes.textArea}`}>
        <textarea autoComplete='off' type='text' name='description' maxLength='250' placeholder=' ' id='A4' />
        <label htmlFor='A4'>Description</label>
      </div>
    </form>
  );
};

export default AddBookForm;
