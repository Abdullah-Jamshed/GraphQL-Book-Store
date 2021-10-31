import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BookContext } from "../ContextApi/index";

//STYLES
import classes from "../styles/detail.module.css";

// Querise
import { BOOK_BY_ID } from "../GraphQL/Queries";

// Components
import Loader from "./Loader";
import Detail from "./Detail";

const DetailSection = ({ refDetail }) => {
  const { id, setBook } = useContext(BookContext);
  const { data, loading, error } = useQuery(BOOK_BY_ID, { variables: { bookId: id }, skip: !id });

  useEffect(() => {
    if (data) setBook(data.book);
  }, [data, setBook]);

  return (
    <div className={classes.main} ref={refDetail}>
      {loading ? <Loader /> : error ? <h1>Error</h1> : <Detail />}
    </div>
  );
};

export default DetailSection;
