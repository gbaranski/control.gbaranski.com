import React, { useState, useEffect } from "react";
import AlarmCard from "./card.js";
import { getRemoteData, fetchUrl } from "../helpers.js";
import { requestTypes } from "../types.js";

function Alarmclock() {
  const [data, setData] = useState({
    temperature: 0,
    humidity: 0,
    remainingTime: "",
    alarmTime: "",
    alarmState: false,
  });
  const [blur, setBlur] = useState(false);
  const [alarmInput, setAlarmInput] = useState("");
  useEffect(() => {
    setInterval(async () => {
      if (document.hasFocus()) {
        getRemoteData(requestTypes.GET_DATA_ALARMCLOCK).then((json) => {
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
        alarmState={data.alarmState}
        changeAlarmTime={(e) => setAlarmInput(e.target.value)}
        refreshDataFunction={async () => {
          setBlur(true);
          await getRemoteData(requestTypes.GET_DATA_ALARMCLOCK);
          setTimeout(() => {
            setBlur(false);
          }, 1000);
        }}
        sendDataToRemoteFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          headers.append("time", alarmInput);
          await fetchUrl("/setAlarm", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        switchAlarmStateFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          headers.append("state", String(data.alarmState ? 1 : 0));
          await fetchUrl("/setAlarmState", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        testAlarmFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          await fetchUrl("/testAlarm", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        isLoading={blur}
      ></AlarmCard>
    </div>
  );
}

export default Alarmclock;
