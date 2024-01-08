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
import { useState } from "react";

const SelectNewsPaper = () => {

  const [selectecUrls, setSelectedUrls] = useState([])

  const handleSelectNewspaper = (url) => {
    const isFound = selectecUrls.indexOf(url)
    if(isFound > -1) setSelectedUrls(urls => urls.filter(filterUrl => filterUrl !== url))

    if(isFound === -1) setSelectedUrls((urls) => [...urls, url])
      
  };
  
  console.log(selectecUrls)
  
  return(
    <>
      <Grid
        container
        direction="column"
        >
        {Object.entries(newsPaperUrls).map(([key, value]) => {
          const items = value.map(({ title, url }) => (
            <FormControlLabel
              key={Math.random()}
              control={<Checkbox />}
              label={title}
              value={url}
              onChange = {() => handleSelectNewspaper(url)}
              checked={selectecUrls.indexOf(url) > -1}
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
  )
};

export default SelectNewsPaper;
