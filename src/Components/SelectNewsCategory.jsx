/*
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";

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
  const { newsCategory, setNewsCategory, setSelectedUrls } = useNewspaper();

  const handleChange = (event) => {
    // Clear selection of newspapers first
    setSelectedUrls([]);
    setNewsCategory(event.target.value.trim());
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
*/

//improved verstion
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";

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
  const { newsCategory, setNewsCategory, setSelectedUrls } = useNewspaper();

  const handleChange = (event) => {
    setNewsCategory(event.target.value);
    setSelectedUrls([])
  };

  return (
    <FormControl>
      <FormLabel id="news-category-label" sx={{ textTransform: "uppercase" }}>
        Categories
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="news-category-label"
        name="news-category"
        value={newsCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            value={category}
            control={<Radio />}
            label={category}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectNewsCategory;
