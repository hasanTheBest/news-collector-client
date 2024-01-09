import React from "react";

import newsPaperUrls from "../src/data/dummyData/newsUrls.json";
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

const SelectNewspaperName = () => {
  const { selectedUrls, handleSelectNewspaper, handleNewspaperSubmission } =
    useNewspaper();

  return (
    <React.Fragment>
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
