import React, { useState, useEffect } from "react";
import AlarmCard from "./card";
import { getRemoteData, fetchUrl } from "../helpers";
import { requestTypes } from "../types";

function askForCredentials() {
  const username = prompt("Whats your username?", "");
  const passsword = prompt("Whats your password?", "");
  localStorage.setItem("username", username || "");
  localStorage.setItem("password", passsword || "");
}

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
          setData(JSON.parse(json));
          console.log(JSON.parse(json));
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
        changeAlarmTime={(e: any) => setAlarmInput(e.target.value)}
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
          await fetchUrl("/api/alarmclock/setTime", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        switchAlarmStateFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          headers.append("state", String(data.alarmState ? 1 : 0));
          await fetchUrl("/api/alarmclock/switchState", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        testAlarmFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          await fetchUrl("/api/alarmclock/testSiren", headers);
          setTimeout(() => setBlur(false), 1000);
        }}
        askCredentialsFunction={() => {
          askForCredentials();
        }}
        isLoading={blur}
      ></AlarmCard>
    </div>
  );
}

export default Alarmclock;
