// import React from "react";
import newsPaperUrls from "../src/data/dummyData/newsUrls.json";

const SelectNewsPaper = () => {
  return (
    <>
      {Object.entries(newsPaperUrls).map(([key, value]) => {
        const items = value.map(({ title, url }, i) => (
          <div key={i}>
            <label className="cursor-pointer btn">
              <input type="checkbox" className="checkbox" value={url} />
              <span className="label-text">{title}</span>
            </label>
          </div>
        ));

        return (
          <div className="form-control" key={key}>
            <h2 className="text-lg font-bold">{key}</h2>
            {items}
          </div>
        );
      })}
    </>
  );
};

export default SelectNewsPaper;
