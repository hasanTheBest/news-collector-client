import { Button, Grid } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";

const NewspaperCategorySubmitBtn = () => {
  const { urlToFetch, newsData, setNewsData, setNewsError } = useNewspaper();

  const handleNewspaperSubmission = (e) => {
    e.preventDefault();
    console.log("urlToFetch", urlToFetch);
    setNewsData([]);
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

    eventSource.close();
  };
  return (
    <Grid
      item
      xs
      component="form"
      p={2}
      alignSelf="center"
      onSubmit={handleNewspaperSubmission}
    >
      <Button
        disabled={!newsData.length}
        variant="contained"
        size="large"
        type="submit"
        color="primary"
      >
        Submit
      </Button>
    </Grid>
  );
};

export default NewspaperCategorySubmitBtn;
