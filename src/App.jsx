import { useState } from "react";
import "./App.css";
// import news from "./data/samakal.json";
import news from "./data/manabzamin.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="xl:container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          {news.map((item, i) => {
            const hasImgSrc = item.hasOwnProperty("imgSrc");
            const hasExcerpt = item.hasOwnProperty("excerpt");
            const hasTime = item.hasOwnProperty("time");
            let classes;

            if (hasImgSrc && hasExcerpt) classes = "col-span-2 row-span-2";
            else if (hasExcerpt) classes = "row-span-2";
            else if (hasImgSrc) classes = "col-span-2";
            else classes = "cols-span-1 row-span-1";

            const bgImage = hasImgSrc && item.imgSrc;

            return (
              <>
                <div className={`card bg-base-100 shadow-xl ${classes}`}>
                  <div
                    className={`card-body bg-cover bg-center ${
                      hasImgSrc && "bg-[url(" + item.imgSrc + ")]"
                    }`}
                    // style={`background-image: url(${item?.imgSrc})`}
                    // style="background-image: url(https://samakal.com/media/imgAll/2023December/4-1703682537.jpg)"
                  >
                    <h2 className="h2">{item.title}</h2>
                    {hasExcerpt && <p>{item.excerpt}</p>}

                    {hasTime && (
                      <div className="card-actions justify-end">
                        <div className="badge badge-neutral">{item.time}</div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}

          {/* <div className="grid grid-cols-subgrid gap-4 col-span-3">
            <div className="col-start-3">06</div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
