import React, { useContext } from "react";

//STYLES
import classes from "../styles/detail.module.css";

// Context Api
import { BookContext } from "../ContextApi";

const Detail = () => {
  const { book, index, bookRef } = useContext(BookContext);
  return (
    <>
      {book ? (
        <div className={classes.detail}>
          {Object.keys(book).map(
            (key, i) =>
              book[key] &&
              (key === "authors" && book[key].split(",").length > 1 ? (
                <div key={i}>
                  <span className={classes.key}>{key} :</span>
                  <ul className={classes.list}>
                    {book[key].split(",").map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p key={i}>
                  <span className={classes.key}>{key === "authors" ? "author" : key} :</span> {book[key]}
                </p>
              ))
          )}
          <button
            className={classes.bookButton}
            onClick={() => {
              window.scrollTo({ top: bookRef.current[index || 0].offsetTop });
            }}>
            back to book
          </button>
        </div>
      ) : (
        <h2>Select Book</h2>
      )}
    </>
  );
};

export default Detail;
