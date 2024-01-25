/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const NewspaperContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

const NewspaperProvider = ({ children }) => {
  const [selectedUrls, setSelectedUrls] = useState([
    // "prothomAlo",
    // "theDailyStar",
    // "bbcBangla",
    // "bdPratidin",
    "ittefaq",
    // "dailyNayaDiganta",
  ]);

  const [newsCategory, setNewsCategory] = useState("leading");

  const urlToFetch = `http://localhost:5000/news?newspaperNames=${selectedUrls.join(
    ","
  )}&newsCat=${newsCategory}`;

  // when first time website is loaded
  const {
    data: newsData,
    error: newsError,
    isLoading,
    isValidating,
  } = useSWR(urlToFetch, fetcher);

  // when submit button is pressed
  // const {
  //   trigger,
  //   data: newsData,
  //   error: newsError,
  // } = useSWRMutation(
  //   urlToFetch,
  //   fetcher
  // );

  const handleSelectNewspaper = (url) => {
    const isFound = selectedUrls.indexOf(url);
    if (isFound > -1)
      setSelectedUrls((urls) => urls.filter((filterUrl) => filterUrl !== url));

    if (isFound === -1) setSelectedUrls((urls) => [...urls, url]);
  };

  const handleNewspaperSubmission = (e) => {
    e.preventDefault();

    // submit the select form and start scrapping
    // trigger();
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
        setSelectedUrls,
        isLoading,
        isValidating,
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
