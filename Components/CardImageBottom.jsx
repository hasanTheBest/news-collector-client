import React from "react";

const CardImageBottom = ({ item }) => {
  return (
    <div className="card card-compact shadow-lg border w-full bg-base-100 rounded-none row-span-2">
      <div className="card-body">
        <h2 className="text-base">
          <a href={item.link}>{item.title}</a>
        </h2>
      </div>
      <figure>
        <img src={item.imgSrc} alt={item.title} />
      </figure>
    </div>
  );
};

export default CardImageBottom;
