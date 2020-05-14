import React, { useState, useEffect } from "react";
import WaterCard from "./card.js";

async function getRemoteData() {
  const response = await fetch("http://localhost:3001/getESPData", {
    method: "GET",
  });
  return response.json();
}

async function sendGetRequest(queryString) {
  const url = "http://localhost:3001" + queryString;
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
  }).catch((error) => {
    alert(error);
    return;
  });
  return response;
}

function Watermixer() {
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
      <WaterCard
        waterState={data.alarmState}
        remainingTime={data.remainingTime}
        startMixingFunction={async () => {
          setBlur(true);
          await sendGetRequest("/startMixing");
          setTimeout(() => {
            setBlur(false);
          }, 1000);
        }}
        isLoading={blur}
      ></WaterCard>
    </div>
  );
}

export default Watermixer;
