/* eslint-disable no-prototype-builtins */
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import news from "../src/data/dummyData/news.json";
import HeadLines from "./HeadLines";
import TitleExcerpt from "./TitleExcerpt";
import TitleImage from "./TitleImage";
import TitleMeta from "./TitleMeta";
import { useNewspaper } from "./NewspaperContext";
import DisplayLeadNews from "./DisplayLeadNews";
import DisplaySubLeadNews from "./DisplaySubLeadNews";

const DisplayNewspaper = () => {
  const { newsError, newsData } = useNewspaper();

  const theme = useTheme();

  // breakpoint
  let screen = "xs",
    colSpan,
    colNum;
  if (theme.breakpoints.up("xs")) screen = "sm";
  else if (theme.breakpoints.up("sm")) screen = "md";
  else if (theme.breakpoints.up("md")) screen = "lg";
  // else if (theme.breakpoints.up("lg")) screen = "xl";
  else screen = "xl";

  // console.log("screen", screen);
  console.log(theme.breakpoints.between("md", "lg"));

  switch (screen) {
    case "sm":
      colSpan = 5;
      break;

    case "md":
      colSpan = 4;
      colNum = 12;
      break;

    case "lg":
      colSpan = 3;
      colNum = 12;
      break;

    case "xl":
      colSpan = 2;
      break;

    default:
      colSpan = 10;
      colNum = 10;
      break;
  }

  const styles = {
    GridContainer: {
      [theme.breakpoints.between("md", "xl")]: {
        gridTemplateColumns: "repeat(12, 1fr)",
      },
    },
    gridItem: {
      [theme.breakpoints.up("sm")]: {
        gridColumn: "span 5",
      },
      [theme.breakpoints.up("md")]: {
        gridColumn: "span 4",
      },
      [theme.breakpoints.up("lg")]: {
        gridColumn: "span 3",
      },
      [theme.breakpoints.up("xl")]: {
        gridColumn: "span 2",
      },
    },
  };

  if (newsData) {
    return (
      <Typography align="center" variant="h1" color="info">
        loading...
      </Typography>
    );
  }

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
      {/* <Box display="grid" gridTemplateColumns={`repeat(${colNum}, 1fr)`} gap={2}> */}
      {/* {newsData &&
        newsData.data.map(({ title, url, news }) => { */}
      {news.data.map(({ title, url, news }) => {
        return (
          <>
            {news.map((item, newsIndex) => {
              // for sm screen 10 | 5, 5 = 10/2

              // for md screen 6, 4 | 3, 3, 4 = 12/3

              // for lg screen  12/4

              // for xl 10/5
              const col = newsIndex === 0 ? colSpan * 2 : colSpan;

              return (
                <Box
                  gridColumn={`span 10`}
                  key={Math.random()}
                  sx={styles.gridItem}
                >
                  <DisplaySubLeadNews
                    colSpan={colSpan}
                    item={item}
                    title={title}
                    url={url}
                  />
                </Box>
              );
            })}
          </>
        );
      })}
    </Box>
  );
};

export default DisplayNewspaper;
