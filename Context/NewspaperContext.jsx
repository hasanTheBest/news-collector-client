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
    // "bbcBangla",
    // "bdPratidin",
    // "dailyNayaDiganta",
  ]);

  const [newsCategory, setNewsCategory] = useState("leading");
  const [newsData, setNewsData] = useState([]);
  const [newsError, setNewsError] = useState(false);

  const urlToFetch = `http://localhost:5000/news?newspaperNames=${selectedUrls.join(
    ","
  )}&newsCat=${newsCategory}`;

  /* const {
    data: newsData,
    error: newsError,
    isLoading,
    isMutating: isValidating,
    trigger: newsTrigger,
  } = useSWRMutation(urlToFetch); */

  useEffect(() => {
    const eventSource = new EventSource(urlToFetch);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setNewsError(false);
      setNewsData((prevData) => [...prevData, newData]);
    };

    eventSource.onerror = (error) => {
      // setNewsError(true);
      console.error("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      // Close the SSE connection when the component unmounts
      eventSource.close();
    };
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
        setNewsData,
        setNewsError,
        urlToFetch,
        // isLoading,
        // isValidating,
        // newsTrigger,
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
