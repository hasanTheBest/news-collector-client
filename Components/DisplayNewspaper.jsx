/* eslint-disable no-prototype-builtins */
import { Box, Typography, styled, useTheme } from "@mui/material";
import news from "../src/data/dummyData/news.json";
import { useNewspaper } from "./NewspaperContext";
import DisplaySubLeadNews from "./DisplaySubLeadNews";

const DisplayNewspaper = () => {
  const { newsError, newsData } = useNewspaper();

  const theme = useTheme();

  // Styles for container and item
  const styles = {
    GridContainer: {
      [theme.breakpoints.between("md", "xl")]: {
        gridTemplateColumns: "repeat(12, 1fr)",
      },
    },
  };

  const BoxWithStyles = styled("div")(({ newsIndex }) => ({
    [theme.breakpoints.up("xs")]: {
      gridColumn: "span 10",
    },
    [theme.breakpoints.up("sm")]: {
      gridColumn: newsIndex === 0 ? "span 10" : "span 5",
    },
    [theme.breakpoints.up("md")]: {
      gridColumn: newsIndex === 0 ? "span 8" : "span 4",
    },
    [theme.breakpoints.up("lg")]: {
      gridColumn: newsIndex === 0 ? "span 6" : "span 3",
    },
    [theme.breakpoints.up("xl")]: {
      gridColumn: newsIndex === 0 ? "span 4" : "span 2",
    },
  }));

  // is loading
  if (newsData) {
    return (
      <Typography align="center" variant="h1" color="info">
        loading...
      </Typography>
    );
  }

  // is error
  if (newsError) {
    return (
      <Typography variant="h1" color="error">
        Error is occurred...
      </Typography>
    );
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(10, 1fr)`}
      gap={2}
      sx={styles.GridContainer}
    >
      {/* {newsData &&
        newsData.data.map(({ title, url, news }) => { */}
      {news.data.map(({ title, url, news }) => {
        return (
          <>
            {news.map((item, newsIndex) => {
              return (
                <BoxWithStyles key={Math.random()} newsIndex={newsIndex}>
                  <DisplaySubLeadNews
                    newsIndex={newsIndex}
                    item={item}
                    title={title}
                    url={url}
                  />
                </BoxWithStyles>
              );
            })}
          </>
        );
      })}
    </Box>
  );
};

export default DisplayNewspaper;
