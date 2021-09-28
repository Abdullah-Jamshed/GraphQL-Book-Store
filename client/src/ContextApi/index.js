import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [book, setBook] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [searchedInput, setSearchedInput] = useState("");
  const [offSet, setOffSet] = useState(0);

  return (
    <BookContext.Provider value={{ id, setId, book, setBook, isSearched, setIsSearched, searchedInput, setSearchedInput, offSet, setOffSet }}>
      {children}
    </BookContext.Provider>
  );
};
