// import React from "react";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";

const SelectNewsPaper = () => {
  return (
    <>
      {Object.entries(newsPaperUrls).map(([key, value]) => {
        const items = value.map(({ title, url }, i) => (
          <label className="cursor-pointer" key={i}>
            <input type="checkbox" className="checkbox" value={url} />
            <span className="label-text">{title}</span>
          </label>
        ));

        return (
          <div key={key}>
            <h2 className="text-2xl font-semibold">{key}</h2>
            <div className="form-control" key={key}>
              {items}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SelectNewsPaper;
