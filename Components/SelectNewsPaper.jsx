// import React from "react";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";

const SelectNewsPaper = () => {
  return (
    <div className="flex flex-col flex-wrap">
      {Object.entries(newsPaperUrls).map(([key, value]) => {
        const items = value.map(({ title, url }, i) => (
          <label
            className="cursor-pointer flex flex-row flex-wrap gap-2"
            key={i}
          >
            <input type="checkbox" className="checkbox" value={url} />
            <span className="label-text">{title}</span>
          </label>
        ));

        return (
          <div key={key}>
            <h2 className="text-xl font-semibold uppercase mb-4">{key}</h2>
            <div
              className="form-control flex flex-row flex-wrap gap-3"
              key={key}
            >
              {items}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SelectNewsPaper;
