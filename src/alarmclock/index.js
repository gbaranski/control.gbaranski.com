import React, { useState, useEffect } from "react";
import Card from "./card.js";

async function getRemoteData() {
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  });
  return response.json();
}

function Alarmclock() {
  const [data, setData] = useState(0);

  useEffect(() => {
    setInterval(
      () =>
        getRemoteData().then((json) => {
          setData(json);
        }),
      1000
    );
  }, []);

  return (
    <div>
      <Card temperature={data.temperature} humidity={data.humidity}>
        <h1>Grzechu</h1>
      </Card>
    </div>
  );
}

export default Alarmclock;
