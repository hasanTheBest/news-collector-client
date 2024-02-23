import { Button, Grid } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";

const NewspaperCategorySubmitBtn = () => {
  const { urlToFetch, newsData, setNewsData, setNewsError, setFetchIndicator, selectedUrls } = useNewspaper();

  const handleNewspaperSubmission = (e) => {
    e.preventDefault();
    setNewsData([]);
    setFetchIndicator(selectedUrls)

    const eventSource = new EventSource(urlToFetch);

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setNewsError(false);
      setNewsData((prevData) => [...prevData, newData]);
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };
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
