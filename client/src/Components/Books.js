import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";

// STYLES
import classes from "../styles/bookList.module.css";

// ICONS
import { RiLoader4Fill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";

// COMPONENTS
import Book from "./Book";
import Loader from "./Loader";

// GrapghQl Queries
import { LATEST_BOOKS, SEARCHED_BOOKS } from "../GraphQL/Queries";
import { BookContext } from "../ContextApi";

const Books = ({ refDetail }) => {
  //States
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { setBook, searchedInput, isSearched } = useContext(BookContext);

  // Queries
  const { error, loading, data, refetch } = useQuery(LATEST_BOOKS, {
    notifyOnNetworkStatusChange: true,
    skip: isSearched,
    onError: () => {
      setBook(null);
    },
  });

  const {
    error: err2,
    loading: loading2,
    data: { searchedBooks } = [],
    refetch: rfSearch,
  } = useQuery(SEARCHED_BOOKS, {
    variables: { currentPage, searchedInput },
    notifyOnNetworkStatusChange: true,
    skip: !isSearched,
    onError: () => {
      setBook(null);
    },
  });

  // Lifecycles
  useEffect(() => {
    if (data) setBooks(data.books.books);
  }, [data]);

  return (
    <div className={classes.mainContainer}>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1 className={classes.error}>
          Something Went Wrong
          <span>
            <AiOutlineReload className={classes.reloadIcon} onClick={() => refetch()} />
          </span>
        </h1>
      ) : (
        <div className={classes.booksContainer}>
          {isSearched ? (
            <>
              {loading2 ? (
                <Loader />
              ) : err2 ? (
                <h1 className={classes.error}>
                  Something Went Wrong
                  <span>
                    <AiOutlineReload className={classes.reloadIcon} onClick={() => rfSearch()} />
                  </span>
                </h1>
              ) : (
                <>
                  <h1 className={classes.heading}>Matched {searchedBooks.total}</h1>
                  {searchedBooks.books.map((book, i) => (
                    <Book key={book.isbn13} book={book} refDetail={refDetail} />
                  ))}

                  <div className={classes.pagination}>
                    {[...Array(Math.ceil(searchedBooks.total / 10))].map((_, i) => (
                      <span
                        key={i}
                        className={`${currentPage === i + 1 && classes.currentPage}  ${classes.page}`}
                        onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <h1 className={classes.heading}>Latest Book</h1>
              {books.map((book, i) => (
                <Book key={book.isbn13} book={book} refDetail={refDetail} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Books;
