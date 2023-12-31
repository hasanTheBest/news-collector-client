import React from "react";

const CardImageSide = ({ item }) => {
  return (
    <div className="card flex flex-row border-none bg-base-100 shadow-lg col-span-2">
      <figure>
        <img src={item.imgSrc} alt={item.title} />
      </figure>
      <div className="card-body relative">
        <h2 className="text-base">
          <a href={item.link}>{item.title}</a>
        </h2>
      </div>
    </div>
  );
};

export default CardImageSide;
