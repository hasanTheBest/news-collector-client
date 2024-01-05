// import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";

const SelectNewsPaper = () => {
  return (
    <>
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
          <div key={key}>
            <Typography variant="h5" color="initial">
              {key}
            </Typography>
            <FormGroup>{items}</FormGroup>
          </div>
        );
      })}
    </>
  );
};

export default SelectNewsPaper;
