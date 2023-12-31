/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */

const CardImageOverlay = ({ item }) => {
  const hasImgSrc = item.hasOwnProperty("imgSrc");
  const hasExcerpt = item.hasOwnProperty("excerpt");
  const hasTime = item.hasOwnProperty("time");

  let classes;

  if (hasImgSrc && hasExcerpt) classes = "col-span-2 row-span-2";
  else if (hasExcerpt) classes = "row-span-2";
  // else if (hasImgSrc) classes = "col-span-2";
  else classes = "cols-span-1 row-span-1";

  return (
    <>
      <div
        className={`card card-compact w-full rounded-none image-full ${classes}`}
      >
        {hasImgSrc && (
          <figure>
            <img src={item.imgSrc} alt={item.title} />
          </figure>
        )}

        <div className="card-body">
          {hasImgSrc && hasExcerpt ? (
            <h2 className="card-title">
              <a href={item.link}>{item.title}</a>
            </h2>
          ) : (
            <h2 className="text-base font-medium">
              <a href={item.link}>{item.title}</a>
            </h2>
          )}

          {hasExcerpt && <p>{item.excerpt}</p>}

          {hasTime && (
            <div className="card-actions justify-end">
              <span className="badge">{item.time}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardImageOverlay;
