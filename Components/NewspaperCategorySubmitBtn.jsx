import { Button, Grid } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";

const NewspaperCategorySubmitBtn = () => {
  const { newsTrigger, isLoading, isValidating } = useNewspaper();

  const handleNewspaperSubmission = (e) => {
    e.preventDefault();

    // trigger scrapping news category
    newsTrigger();
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
        disabled={isLoading || isValidating}
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
