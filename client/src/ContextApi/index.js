import { createContext, useState, useRef } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [book, setBook] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [searchedInput, setSearchedInput] = useState("");
  const [index, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const bookRef = useRef([]);
  return (
    <BookContext.Provider
      value={{
        id,
        setId,
        book,
        setBook,
        isSearched,
        setIsSearched,
        searchedInput,
        setSearchedInput,
        index,
        setIndex,
        currentPage,
        setCurrentPage,
        bookRef,
      }}>
      {children}
    </BookContext.Provider>
  );
};
