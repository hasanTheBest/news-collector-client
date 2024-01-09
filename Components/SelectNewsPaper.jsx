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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const filterSections = ["Leading", "Latest", "Most Read", "National", "International", "Editorial/Opnion", "Sports", "Entertainment", "Job"]

const SelectNewsPaper = () => {
  const { selectedUrls, handleSelectNewspaper, handleNewspaperSubmission } =
    useNewspaper();

  const [value, setValue] = React.useState(filterSections[0].toLowerCase());

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container direction="column" mb={6}>
        <Grid container direction="row">
          <Grid container direction="column" item md={9} flexGrow={1}>
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
          </Grid>
          {/* Filter option */}
          <Grid item md={3}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group" className="h6">Sections</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                {filterSections.map((item, i) => (
                  <FormControlLabel key={Math.random()} value={item.toLowerCase()} control={<Radio />} label={item} />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

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
