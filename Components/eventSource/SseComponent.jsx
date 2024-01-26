import React, { useState, useEffect } from "react";

const SseComponent = () => {
  const [sseData, setSseData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/sse?q=test");

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      // console.dir("newData", newData);
      setSseData((prevData) => [...prevData, newData.news]);
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      // Close the SSE connection when the component unmounts
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>SSE Updates:</h1>
      <ul>
        {sseData.map((data, index) => (
          <li key={index}>{JSON.stringify(data, null, 2)}</li>
          // <li key={index}>{JSON.stringify(data, null, 2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SseComponent;
