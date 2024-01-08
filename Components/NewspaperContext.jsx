/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";
import useSWRMutation from "swr/mutation";

const NewspaperContext = createContext();

const NewspaperProvider = ({ children }) => {
  const [selectedUrls, setSelectedUrls] = useState([]);

  const {
    trigger,
    data: newsData,
    error: newsError,
  } = useSWRMutation(
    `http://localhost:5000/news?urls=${selectedUrls.join(",")}`
  );

  const handleSelectNewspaper = (url) => {
    const isFound = selectedUrls.indexOf(url);
    if (isFound > -1)
      setSelectedUrls((urls) => urls.filter((filterUrl) => filterUrl !== url));

    if (isFound === -1) setSelectedUrls((urls) => [...urls, url]);
  };

  const handleNewspaperSubmission = (e) => {
    e.preventDefault();

    trigger();
  };

  return (
    <NewspaperContext.Provider
      value={{
        selectedUrls,
        handleSelectNewspaper,
        handleNewspaperSubmission,
        newsData,
        newsError,
      }}
    >
      {children}
    </NewspaperContext.Provider>
  );
};

export default NewspaperProvider;

export const useNewspaper = () => {
  return useContext(NewspaperContext);
};
