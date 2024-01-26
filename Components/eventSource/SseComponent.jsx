import React, { useState, useEffect } from "react";

const SseComponent = () => {
  const [sseData, setSseData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/sse");

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setSseData((prevData) => [...prevData, newData]);
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
          <li key={index}>{data.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default SseComponent;
