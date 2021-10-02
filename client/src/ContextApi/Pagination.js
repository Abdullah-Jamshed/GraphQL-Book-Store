import { createContext, useState } from "react";

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [pageNumber, setPageNumber] = useState(5);
  const [minP, setMinP] = useState(0);
  const [maxP, setMaxP] = useState(5);

  return (
    <PaginationContext.Provider
      value={{
        pages,
        setPages,
        pageNumber,
        setPageNumber,
        minP,
        setMinP,
        maxP,
        setMaxP,
      }}>
      {children}
    </PaginationContext.Provider>
  );
};
