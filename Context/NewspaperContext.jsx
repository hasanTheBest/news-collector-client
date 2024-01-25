/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

const NewspaperContext = createContext();

const NewspaperProvider = ({ children }) => {
  const [selectedUrls, setSelectedUrls] = useState([
    "prothomAlo",
    "theDailyStar",
    "bbcBangla",
    "bdPratidin",
    "dailyNayaDiganta",
  ]);

  const [newsCategory, setNewsCategory] = useState("leading");

  const urlToFetch = `http://localhost:5000/news?newspaperNames=${selectedUrls.join(
    ","
  )}&newsCat=${newsCategory}`;

  const {
    data: newsData,
    error: newsError,
    isLoading,
    isMutating: isValidating,
    trigger: newsTrigger,
  } = useSWRMutation(urlToFetch);

  // // Fetch data when the component mounts for the first time
  useEffect(() => {
    newsTrigger();
  }, []);

  return (
    <NewspaperContext.Provider
      value={{
        selectedUrls,
        newsData,
        newsError,
        newsCategory,
        setNewsCategory,
        setSelectedUrls,
        isLoading,
        isValidating,
        newsTrigger,
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
