// import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";

const SelectNewsPaper = () => (
  <>
    <Grid
      container
      direction="column"
      // justifyContent="center"
      // alignItems="center"
    >
      {Object.entries(newsPaperUrls).map(([key, value]) => {
        const items = value.map(({ title, url }) => (
          <FormControlLabel
            key={Math.random()}
            control={<Checkbox />}
            label={title}
            value={url}
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
    </Grid>
  </>
);

export default SelectNewsPaper;
