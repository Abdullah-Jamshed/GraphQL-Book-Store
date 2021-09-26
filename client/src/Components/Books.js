import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { RiLoader4Fill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";

// STYLES
import classes from "../styles/bookList.module.css";

// component
import Book from "./Book";

import { LATEST_BOOKS } from "../GraphQL/Queries";

const Books = () => {
  const [books, setBooks] = useState([]);

  const { error, loading, data, refetch } = useQuery(LATEST_BOOKS, {
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data) setBooks(data.books.books);
  }, [data]);

  return (
    <div className={classes.mainContainer}>
      {loading ? (
        <RiLoader4Fill className={classes.loader} />
      ) : error ? (
        <h1 className={classes.error}>
          Something Went Wrong
          <span>
            <AiOutlineReload className={classes.reloadIcon} onClick={() => refetch()} />
          </span>
        </h1>
      ) : (
        <div className={classes.booksContainer}>
          <h1 className={classes.heading} onClick={() => refetch()}>
            Latest Book
          </h1>
          {books.map((book, i) => (
            <Book key={book.isbn13} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
