/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useSWRMutation from "swr/mutation";

const NewspaperContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

const NewspaperProvider = ({ children }) => {
  const [selectedUrls, setSelectedUrls] = useState([
    "theDailyStar",
    "theFinancialExpress",
    "bdPratidin",
    "prothomAlo",
    "bbcBangla",
    "ittefaq",
    "dailyNayaDiganta",
    "dhakaTribune",
  ]);

  const [newsCategory, setNewsCategory] = useState('leading')

  const {
    trigger,
    data: newsData,
    error: newsError,
  } = useSWRMutation(
    `http://localhost:5000/news?urls=${selectedUrls.join(",")}`,
    fetcher
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
        newsCategory,
        setNewsCategory,
        setSelectedUrls
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
