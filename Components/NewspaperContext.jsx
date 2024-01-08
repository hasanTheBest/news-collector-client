import React, { Children, createContext, useContext, useState } from "react";

const NewspaperContext = createContext();

const NewspaperProvider = ({ children }) => {
  const [selectedUrls, setSelectedUrls] = useState([]);

  return (
    <NewspaperContext.Provider value={{ selectedUrls, setSelectedUrls }}>
      {children}
    </NewspaperContext.Provider>
  );
};

export default NewspaperProvider;

export const useNewspaper = () => {
  return useContext(NewspaperContext);
};
