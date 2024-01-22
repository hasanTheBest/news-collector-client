import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useNewspaper } from "./NewspaperContext";

const categories = [
  "leading",
  "national",
  "international",
  "politics",
  "crime",
  "business",
  "entertainment",
  "sports",
  "countryside",
  "opinion",
  "tech",
  "health",
  "lifestyle",
  "feature",
  "job",
  "education",
  "campus",
  "literature",
  "religion",
  "environment",
  "video",
  "stock",
  "trade",
];

const SelectNewsCategory = () => {
  const {newsCategory, setNewsCategory, setSelectedUrls} = useNewspaper();

  const handleChange = (event) => {
    // Clear selection of newspapers first
    setSelectedUrls([])
    setNewsCategory(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{ textTransform: "uppercase" }}
      >
        Categories
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={newsCategory}
        onChange={handleChange}
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        {categories.map((item) => (
          <FormControlLabel
            key={Math.random()}
            value={item.toLowerCase()}
            control={<Radio />}
            label={item}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectNewsCategory;
