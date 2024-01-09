/* eslint-disable no-prototype-builtins */
import React from "react";
import { Box, Typography } from "@mui/material";
import news from "../src/data/dummyData/news.json";
import HeadLines from "./HeadLines";
import TitleExcerpt from "./TitleExcerpt";
import TitleImage from "./TitleImage";
import TitleMeta from "./TitleMeta";
import { useNewspaper } from "./NewspaperContext";

const DisplayNewspaper = () => {
  const { newsError, newsData } = useNewspaper();
  // const urls = handleNewspaperSubmission();
  console.log(newsError, newsData);

  if (!newsData) {
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
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {/* {news.data.map(({ title, url, news }) => { */}
      {console.log("News", newsData)}
      {newsData &&
        newsData.data.map(({ title, url, news }) => {
          return (
            <>
              {news.map((item) => {
                const hasImgSrc = item.hasOwnProperty("imgSrc");
                const hasExcerpt = item.hasOwnProperty("excerpt");

                {
                  /* 3:2 ratio - for image, title, excerpt */
                }
                if (hasImgSrc && hasExcerpt) {
                  return (
                    <HeadLines
                      key={Math.random()}
                      item={item}
                      title={title}
                      url={url}
                    />
                  );
                }

                if (hasExcerpt && !hasImgSrc) {
                  return (
                    <TitleExcerpt
                      key={Math.random()}
                      item={item}
                      title={title}
                      url={url}
                    />
                  );
                }

                if (hasImgSrc && !hasExcerpt) {
                  return (
                    <TitleImage
                      key={Math.random()}
                      item={item}
                      title={title}
                      url={url}
                    />
                  );
                }

                return (
                  <TitleMeta
                    key={Math.random()}
                    item={item}
                    title={title}
                    url={url}
                  />
                );
              })}
            </>
          );
        })}
    </Box>
  );
};

export default DisplayNewspaper;
