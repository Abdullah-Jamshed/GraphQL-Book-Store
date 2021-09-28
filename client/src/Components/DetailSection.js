import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { BookContext } from "../ContextApi/index";

//STYLES
import classes from "../styles/detail.module.css";

// Querise
import { BOOK_BY_ID } from "../GraphQL/Queries";
import Loader from "./Loader";

const DetailSection = ({ refDetail }) => {
  const { id, book, setBook } = useContext(BookContext);

  const { data, loading, error } = useQuery(BOOK_BY_ID, { variables: { bookId: id }, skip: !id });

  useEffect(() => {
    if (data) setBook(data.book);
  }, [data]);

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
              {Object.keys(book).map((key, i) => (
                <p key={i}>
                  <span className={classes.key}>{key} :</span> {book[key]}
                </p>
              ))}
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

{
  /* <p>{book.title}</p>
<p>{book.subtitle}</p>
<p>{book.desc}</p>
<p>{book.language}</p>
<p>{book.pages}</p>
<p>{book.price}</p>
<p>{book.publisher}</p>
<p>{book.rating}</p>
<p>{book.authors}</p>
<p>{book.url}</p> */
}
