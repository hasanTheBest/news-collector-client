/* eslint-disable react/jsx-key */
/* eslint-disable no-prototype-builtins */
// import React from "react";

import news from "./data/dummyData/news.json";
import "./App2.css";
import CardImageOverlay from "../Components/CardImageOverlay";
// import CardImageTop from "../Components/CardImageTop";
import CardImageSide from "../Components/CardImageSide";
import SelectNewsPaper from "../Components/SelectNewsPaper";

const App2 = () => {
  return (
    <div className="lg:container mx-auto">
      <div>
        <SelectNewsPaper />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {news.data.map(({ title, url, news }) => {
          return (
            <>
              {news.map((item, i) => {
                const hasImgSrc = item.hasOwnProperty("imgSrc");
                const hasExcerpt = item.hasOwnProperty("excerpt");

                if (hasImgSrc && !hasExcerpt) {
                  // if (i % 5 === 0) {
                  //   return <CardImageTop item={item} />;
                  // }

                  if (i % 5 === 0) {
                    return (
                      <CardImageSide
                        key={Math.random()}
                        item={item}
                        title={title}
                        url={url}
                      />
                    );
                  }
                }

                return (
                  <CardImageOverlay
                    key={Math.random()}
                    item={item}
                    title={title}
                    url={url}
                    tem={item}
                  />
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App2;
