import React, { useState, useEffect } from "react";
import Cardbody from "./card.js";

async function getRemoteData() {
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  });
  return response.json();
}

async function sendDataToRemote() {
  console.log(document.getElementById("alarmTime").value);
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  });
  return response.ok;
}

function Alarmclock() {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);
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
      <Cardbody
        temperature={data.temperature}
        humidity={data.humidity}
        remainingTime={data.remainingTime}
        alarmTime={data.alarmTime}
        alarmState={
          data.alarmState === undefined
            ? "Loading..."
            : data.alarmState === "0"
            ? "ON"
            : "OFF"
        }
        sendDataToRemoteFunction={async () => {
          setLoading(true);
          await sendDataToRemote();
          setTimeout(() => setLoading(false), 1000);
        }}
        isLoading={loading}
      >
        <h1>Grzechu</h1>
      </Cardbody>
    </div>
  );
}

export default Alarmclock;
