import { useState } from "react";
import "./App.css";
// import news from "./data/samakal.json";
import news from "./data/janakantha.json";

function App() {
  return (
    <>
      <div class="lg:container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
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
                <div className={`card bg-base-100 shadow-lg ${classes}`}>
                  <div
                    className={`card-body p-0 ${hasImgSrc && "flex flex-row"}`}
                    // className={`card-body min-h-max bg-cover bg-center bg-[url(https://www.dailyjanakantha.com/media/imgAll/2023May/SM/%E0%A6%9C%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%A4%E0%A7%87%E0%A6%B2-13-2312280550-SM.jpg)]`}
                    // className={`card-body min-h-max bg-cover bg-center bg-[url(${bgImage})]`}
                    // style={`background-image: url(${item?.imgSrc})`}
                    // style="background-image: url(https://samakal.com/media/imgAll/2023December/4-1703682537.jpg)"
                  >
                    <h2 className="h2">
                      <a href={item.link} target="_blank">
                        {item.title}
                      </a>
                    </h2>
                    <div className="p-1.5">
                      <img
                        className="w-28 h-full"
                        src={item.imgSrc}
                        alt={item.title}
                      />
                      {hasExcerpt && <p>{item.excerpt}</p>}

                      {hasTime && (
                        <div className="card-actions justify-end">
                          <div className="badge badge-neutral">{item.time}</div>
                        </div>
                      )}
                    </div>
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
