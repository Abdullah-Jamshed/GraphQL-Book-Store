import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";

// STYLES
import classes from "../styles/bookList.module.css";

// GrapghQl Queries
import { LATEST_BOOKS, SEARCHED_BOOKS } from "../GraphQL/Queries";

// Context API
import { BookContext } from "../ContextApi";

// COMPONENTS
import Book from "./Book";
import Loader from "./Loader";
import Pagination from "./Pagination";
import Error from "./Error";

const Books = ({ refDetail }) => {
  //States
  const [books, setBooks] = useState([]);
  const { currentPage, setBook, searchedInput, isSearched } = useContext(BookContext);

  // Queries
  const { error, loading, data, refetch } = useQuery(LATEST_BOOKS, {
    notifyOnNetworkStatusChange: true,
    skip: isSearched,
    onError: () => {
      setBook(null);
    },
  });

  const {
    error: error2,
    loading: loading2,
    data: { searchedBooks } = {},
    refetch: rfSearch,
  } = useQuery(SEARCHED_BOOKS, {
    variables: { currentPage, searchedInput },
    notifyOnNetworkStatusChange: true,
    skip: !isSearched,
    onError: () => {
      setBook(null);
    },
    onCompleted: () => {
      window.scrollTo({ top: 0 });
    },
  });

  const totalPage = searchedBooks && Math.ceil(searchedBooks.total / 10);

  // Lifecycles
  useEffect(() => {
    if (data) setBooks(data.books.books);
  }, [data]);

  return (
    <div className={classes.mainContainer}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error refetch={refetch} />
      ) : (
        <div className={classes.booksContainer}>
          {isSearched ? (
            loading2 ? (
              <Loader />
            ) : error2 ? (
              <Error refetch={rfSearch} />
            ) : (
              searchedBooks && (
                <>
                  <h1 className={classes.heading}>Matched {searchedBooks.total}</h1>
                  {searchedBooks.books.map((book, i) => (
                    <Book key={book.isbn13} book={book} refDetail={refDetail} index={i} />
                  ))}
                  <Pagination totalPage={totalPage} />
                </>
              )
            )
          ) : (
            <>
              <h1 className={classes.heading}>Latest Book</h1>
              {books.map((book, i) => (
                <Book key={book.isbn13} book={book} refDetail={refDetail} index={i} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Books;
