import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const categories = [
  "Leading",
  "Latest",
  "Most Read",
  "National",
  "Politics",
  "Technology",
  "Crime",
  "International",
  "Editorial",
  "Sports",
  "Entertainment",
  "Job",
];

const SelectNewsCategory = () => {
  const [value, setValue] = React.useState(categories[0].toLowerCase());

  const handleChange = (event) => {
    setValue(event.target.value);
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
        value={value}
        onChange={handleChange}
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        {categories.map((item) => (
          <FormControlLabel
            key={Math.random()}
            value={item.toLowerCase()}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectNewsCategory;
