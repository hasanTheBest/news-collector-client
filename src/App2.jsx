/* eslint-disable no-prototype-builtins */
// import React from "react";

import news from "./data/janakantha.json";
import "./App2.css";
import CardImageOverlay from "../Components/CardImageOverlay";
import CardImageTop from "../Components/CardImageTop";
import CardImageSide from "../Components/CardImageSide";

const App2 = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {news.map((item, i) => {
          const hasImgSrc = item.hasOwnProperty("imgSrc");
          const hasExcerpt = item.hasOwnProperty("excerpt");

          if (hasImgSrc && !hasExcerpt) {
            if (i % 5 === 0) {
              return <CardImageTop item={item} />;
            }

            if (i % 7 === 0) {
              return <CardImageSide item={item} />;
            }
          }

          return <CardImageOverlay key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App2;
