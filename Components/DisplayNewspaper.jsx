/* eslint-disable no-prototype-builtins */
import React from "react";
import { Box } from "@mui/material";
import news from "../src/data/dummyData/news.json";
import HeadLines from "./HeadLines";
import TitleExcerpt from "./TitleExcerpt";
import TitleImage from "./TitleImage";
import TitleMeta from "./TitleMeta";

const DisplayNewspaper = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {news.data.map(({ title, url, news }) => {
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
