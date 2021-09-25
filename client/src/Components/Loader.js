import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

// STYLES
import classes from "../styles/bookList.module.css";

const Loader = () => {
  return <RiLoader4Fill className={classes.loader} />;
};

export default Loader;
