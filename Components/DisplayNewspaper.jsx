/* eslint-disable no-prototype-builtins */
import React from "react";
import { Box, Typography } from "@mui/material";
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
    <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
      {/* {newsData &&
        newsData.data.map(({ title, url, news }) => { */}
      {news.data.map(({ title, url, news }) => {
        return (
          <>
            {news.map((item, newsIndex) => {
              // const hasImgSrc = item.hasOwnProperty("imgSrc");
              // const hasExcerpt = item.hasOwnProperty("excerpt");

              {
                // Display Lead News
              }
              // if (newsIndex === 0) {
              //   return (
              //     <Box gridColumn="span 4" key={Math.random()}>
              //       <DisplayLeadNews item={item} title={title} url={url} />
              //     </Box>
              //   );
              // }

              // if (hasExcerpt && !hasImgSrc) {
              //   return (
              //     <TitleExcerpt
              //       key={Math.random()}
              //       item={item}
              //       title={title}
              //       url={url}
              //     />
              //   );
              // }

              // if (hasImgSrc && !hasExcerpt) {
              //   return (
              //     <TitleImage
              //       key={Math.random()}
              //       item={item}
              //       title={title}
              //       url={url}
              //     />
              //   );
              // }
              const colSpan = newsIndex === 0 ? 4 : 2;
              return (
                <Box gridColumn={`span ${colSpan}`} key={Math.random()}>
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
