import React, { useState, useEffect } from "react";
import AlarmCard from "./card.js";

async function getRemoteData() {
  const response = await fetch("https://control.gbaranski.com/getAlarmESPData", {
    method: "GET",
  });
  return response.json();
}

async function sendGetRequest(queryString) {
  const url = "https://control.gbaranski.com" + queryString;
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
  }).catch((error) => {
    alert(error);
    return;
  });
  return response;
}

function Alarmclock() {
  const [data, setData] = useState(0);
  const [blur, setBlur] = useState(false);
  const [alarmInput, setAlarmInput] = useState("");
  useEffect(() => {
    setInterval(async () => {
      if (document.hasFocus()) {
        getRemoteData().then((json) => {
          setData(json);
        });
      }
    }, 1000);
  }, []);

  return (
    <div>
      <AlarmCard
        temperature={data.temperature}
        humidity={data.humidity}
        remainingTime={data.remainingTime}
        alarmTime={data.alarmTime}
        alarmState={
          data.alarmState === undefined
            ? "Loading..."
            : data.alarmState === "0"
              ? "OFF"
              : "ON"
        }
        changeAlarmTime={(e) => setAlarmInput(e.target.value)}
        refreshDataFunction={async () => {
          setBlur(true);
          await getRemoteData();
          setTimeout(() => {
            setBlur(false);
          }, 1000);
        }}
        sendDataToRemoteFunction={async () => {
          setBlur(true);
          await sendGetRequest("/setAlarm?time=" + alarmInput);
          setTimeout(() => setBlur(false), 1000);
        }}
        switchAlarmStateFunction={async () => {
          setBlur(true);
          await sendGetRequest(
            `/setAlarmState?state=${data.alarmState === "1" ? "0" : "1"}`
          );
          setTimeout(() => setBlur(false), 1000);
        }}
        testAlarmFunction={async () => {
          setBlur(true);
          await sendGetRequest("/testAlarm");
          setTimeout(() => setBlur(false), 1000);
        }}
        isLoading={blur}
      >
        <h1>Grzechu</h1>
      </AlarmCard>
    </div>
  );
}

export default Alarmclock;
