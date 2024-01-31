/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BASEURL = "https://news-collector-kmi6.onrender.com"; // without last slash
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
  const [newsData, setNewsData] = useState([]);
  const [newsError, setNewsError] = useState(false);

  const urlToFetch = `${BASEURL}/news?newspaperNames=${selectedUrls.join(
    ","
  )}&newsCat=${newsCategory}`;

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
