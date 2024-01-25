import React from "react";

import newspaperNames from "../src/data/dummyData/newspapersNames.json";
import newsCategories from "../src/data/dummyData/newspapersCategories.json";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";
import NewspaperCategorySubmitBtn from "./NewspaperCategorySubmitBtn";

const SelectNewspaperName = () => {
  const { selectedUrls, setSelectedUrls, newsCategory } = useNewspaper();

  const handleSelectNewspaper = (url) => {
    setSelectedUrls((urls) =>
      urls.includes(url)
        ? urls.filter((filterUrl) => filterUrl !== url)
        : [...urls, url]
    );
  };

  return (
    <React.Fragment>
      {Object.entries(newspaperNames).map(([key, value]) => {
        const items = value.map(({ name, slug }) => {
          return (
            <FormControlLabel
              key={Math.random()}
              control={<Checkbox />}
              label={name}
              value={slug}
              onChange={() => handleSelectNewspaper(slug)}
              checked={selectedUrls.includes(slug)}
              disabled={!newsCategories[slug].includes(newsCategory)}
            />
          );
        });

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
      <NewspaperCategorySubmitBtn />
    </React.Fragment>
  );
};

export default SelectNewspaperName;
