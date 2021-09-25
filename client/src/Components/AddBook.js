// import React, { useState } from "react";

// //ICONS
// import { FiMinus } from "react-icons/fi";

// // STYLES
// import classes from "../styles/bookList.module.css";

// //COMPONENTS
// import AddBookForm from "./AddBookForm";

// const AddBook = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className={`${toggle ? classes.addBookContainer : classes.addBookButton} ${classes.addBook}`}>
//       {toggle ? (
//         <>
//           <FiMinus className={classes.closeButton} onClick={() => setToggle(false)} />
//           <AddBookForm />
//         </>
//       ) : (
//         <div onClick={() => setToggle(true)}>+</div>
//       )}
//     </div>
//   );
// };

// export default AddBook;

import React, { useState } from "react";

//ICONS
import { FiMinus } from "react-icons/fi";

// STYLES
import classes from "../styles/bookList.module.css";

//COMPONENTS
import AddBookForm from "./AddBookForm";

const AddBook = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.addBook}>
      {toggle ? (
        <div className={classes.addBookContainerWrap}>
          <div className={classes.addBookContainer}>
            <FiMinus className={classes.closeButton} onClick={() => setToggle(false)} />
            <AddBookForm />
          </div>
        </div>
      ) : (
        <div className={classes.addBookButton} onClick={() => setToggle(true)}>
          +
        </div>
      )}
    </div>
  );
};

export default AddBook;
