import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import news from "./data/samakal.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="xl:container mx-auto">
        <div className="grid grid-cols-4 gap-4">

          {
            news.map(item => (
              <>
                <div className="card w-full bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="h4">{item.title}</h2>
                    <p>{item?.excerpt}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-neutral">{item?.time}</div>
                    </div>
                  </div>
                </div>
              </>
            ))
          }

          {/* <div className="grid grid-cols-subgrid gap-4 col-span-3">
            <div className="col-start-3">06</div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
