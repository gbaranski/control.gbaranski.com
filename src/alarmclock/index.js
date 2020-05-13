import React, { useState, useEffect } from "react";
import Cardbody from "./card.js";

async function getRemoteData() {
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  });
  return response.json();
}

async function sendGetRequest(url) {
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  }).catch((error) => {
    console.log(error);
    return;
  });
  return response;
}

function Alarmclock() {
  const [data, setData] = useState(0);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setInterval(async () => {
      getRemoteData().then((json) => {
        setData(json);
      });
    }, 1000);
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
        refreshDataFunction={async () => {
          setBlur(true);
          await getRemoteData();
          setTimeout(() => {
            setBlur(false);
          }, 1000);
        }}
        sendDataToRemoteFunction={async () => {
          setBlur(true);
          await sendGetRequest("");
          setTimeout(() => setBlur(false), 1000);
        }}
        switchAlarmStateFunction={async () => {
          setBlur(true);
          await sendGetRequest("");
          setTimeout(() => setBlur(false), 1000);
        }}
        testAlarmFunction={async () => {
          setBlur(true);
          await sendGetRequest("");
          setTimeout(() => setBlur(false), 1000);
        }}
        isLoading={blur}
      >
        <h1>Grzechu</h1>
      </Cardbody>
    </div>
  );
}

export default Alarmclock;
