import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";
import { useState } from "react";
import { useNewspaper } from "./NewspaperContext";

const SelectNewsPaper = () => {
  const { selectedUrls, handleSelectNewspaper, handleNewspaperSubmission } =
    useNewspaper();

  return (
    <React.Fragment>
      <Grid container direction="column" mb={6}>
        {Object.entries(newsPaperUrls).map(([key, value]) => {
          const items = value.map(({ title, url }) => (
            <FormControlLabel
              key={Math.random()}
              control={<Checkbox />}
              label={title}
              value={url}
              onChange={() => handleSelectNewspaper(url)}
              checked={selectedUrls.indexOf(url) > -1}
            />
          ));

          return (
            <Grid item xs key={key}>
              <Box>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ textTransform: "uppercase" }}
                >
                  {key}
                </Typography>
                <FormGroup>
                  <Box sx={{ display: "inline-flex", flexWrap: "wrap" }}>
                    {items}
                  </Box>
                </FormGroup>
              </Box>
            </Grid>
          );
        })}

        {/* Submit button */}
        <Box
          component="form"
          p={2}
          alignSelf="center"
          onSubmit={handleNewspaperSubmission}
        >
          <Button
            variant="contained"
            size="large"
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default SelectNewsPaper;
