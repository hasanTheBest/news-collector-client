import React from "react";

const CardImageTop = ({ item }) => {
  return (
    <div className="card card-compact shadow-lg border w-full bg-base-100 rounded-none row-span-2">
      <figure>
        <img src={item.imgSrc} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="text-base">
          <a href={item.link}>{item.title}</a>
        </h2>
      </div>
    </div>
  );
};

export default CardImageTop;
