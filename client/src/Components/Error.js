import React from "react";

// ICON
import { AiOutlineReload } from "react-icons/ai";

// STYLES
import classes from "../styles/bookList.module.css";


const Error = ({ refetch }) => {
  return (
    <div className={classes.error}>
      Something Went Wrong
      <span>
        <AiOutlineReload className={classes.reloadIcon} onClick={() => refetch()} />
      </span>
    </div>
  );
};

export default Error;
