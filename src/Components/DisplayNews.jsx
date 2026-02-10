/* eslint-disable no-prototype-builtins */
/*
import { Box, Typography, styled, useTheme } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";
import DisplayNewsItem from "./DisplayNewsItem";
import React, { useMemo } from "react";
import LinearProgressBar from "./LinearProgressBar";

const DisplayNews = React.memo(function DisplayNews() {
  const { newsError, newsData } = useNewspaper();

  const theme = useTheme();

  // Styles for container and item
  const styles = useMemo(
    () => ({
      GridContainer: {
        [theme.breakpoints.between("md", "xl")]: {
          gridTemplateColumns: "repeat(12, 1fr)",
        },
      },
    }),
    [theme]
  );

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

  if (newsError) {
    return (
      <Typography variant="h1" color="error">
        Error is occurred...
      </Typography>
    );
  }

  if (!newsData.length) {
    return <LinearProgressBar />;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(10, 1fr)`}
      gap={2}
      sx={styles.GridContainer}
    >
      {newsData &&
        // newsData.map(({ title, url, news }) => {
        newsData.map(({ url, news }) => {
          return (
            <React.Fragment key={Math.random()}>
              {Array.isArray(news) &&
                news.map((item, newsIndex) => {
                  return (
                    <BoxWithStyles key={Math.random()} newsIndex={newsIndex}>
                      <DisplayNewsItem
                        newsIndex={newsIndex}
                        item={item}
                        // type={type}
                        url={url}
                      />
                    </BoxWithStyles>
                  );
                })}
            </React.Fragment>
          );
        })}
    </Box>
  );
});

export default DisplayNews;
*/
import React from "react";
import { Box, Typography } from "@mui/material";
import { useNewspaper } from "../Context/NewspaperContext";
import DisplayNewsItem from "./DisplayNewsItem";
import LinearProgressBar from "./LinearProgressBar";
import { Box, Typography, styled } from "@mui/material";

const NewsGridItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "newsIndex",
})(({ theme, newsIndex }) => ({
  gridColumn: "span 10",

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

const DisplayNews = React.memo(() => {
  const { newsError, newsData } = useNewspaper();

  if (newsError) {
    return (
      <Typography variant="h5" color="error">
        Something went wrong while loading news.
      </Typography>
    );
  }

  if (!newsData.length) {
    return <LinearProgressBar />;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(10, 1fr)"
      gap={2}
    >
      {newsData.map(({ url, news }) =>
        Array.isArray(news)
          ? news.map((item, index) => (
              <NewsGridItem
                key={`${url}-${item.id ?? index}`}
                newsIndex={index}
              >
                <DisplayNewsItem
                  newsIndex={index}
                  item={item}
                  url={url}
                />
              </NewsGridItem>
            ))
          : null
      )}
    </Box>
  );
});

export default DisplayNews;

// next improvement skeleton and clear progressbar/Emptystate