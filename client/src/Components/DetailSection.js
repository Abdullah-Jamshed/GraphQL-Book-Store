import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BookContext } from "../ContextApi/index";

//STYLES
import classes from "../styles/detail.module.css";

// Querise
import { BOOK_BY_ID } from "../GraphQL/Queries";
import Loader from "./Loader";

const DetailSection = ({ refDetail }) => {
  const { id, book, setBook, offSet } = useContext(BookContext);

  const { data, loading, error } = useQuery(BOOK_BY_ID, { variables: { bookId: id }, skip: !id });

  useEffect(() => {
    if (data) setBook(data.book);
  }, [data, setBook]);

  return (
    <div className={classes.main} ref={refDetail}>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Error</h1>
      ) : (
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
                  window.scrollTo({ top: offSet });
                }}>
                back to book
              </button>
            </div>
          ) : (
            <h2>Select Book</h2>
          )}
        </>
      )}
    </div>
  );
};

export default DetailSection;
