import React, { useState } from "react";

import newspaperNames from "../src/data/dummyData/newspapersNames.json";
import newsCategories from "../src/data/dummyData/newspapersCategories.json";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { useNewspaper } from "./NewspaperContext";

const catValue = "national"

const SelectNewspaperName = () => {
  const { selectedUrls, handleSelectNewspaper, handleNewspaperSubmission } =
    useNewspaper();

  return (
    <React.Fragment>
      {Object.entries(newspaperNames).map(([key, value]) => {
        const items = value.map(({ name, slug }) => {

          return(
            <FormControlLabel
              key={Math.random()}
              control={<Checkbox />}
              label={name}
              value={slug}
              onChange={() => handleSelectNewspaper(slug)}
              checked={selectedUrls.indexOf(slug) > -1}
              disabled={!newsCategories[slug].includes(catValue)}
            />
          )})

        return (
          <Grid item xs key={key}>
            <Box>
              <Typography
                variant="body1"
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
      <Grid
        item
        xs
        component="form"
        p={2}
        alignSelf="center"
        onSubmit={handleNewspaperSubmission}
      >
        <Button variant="contained" size="large" type="submit" color="primary">
          Submit
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default SelectNewspaperName;
