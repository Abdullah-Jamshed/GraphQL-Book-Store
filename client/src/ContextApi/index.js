import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [book, setBook] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [searchedInput, setSearchedInput] = useState("");

  return (
    <BookContext.Provider value={{ id, setId, book, setBook, isSearched, setIsSearched, searchedInput, setSearchedInput }}>
      {children}
    </BookContext.Provider>
  );
};
