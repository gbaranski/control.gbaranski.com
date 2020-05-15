import React, { useState, useEffect } from "react";
import WaterCard from "./card.js";

async function getRemoteData() {
  const response = await fetch("https://control.gbaranski.com/getWaterMixerESPData", {
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

function Watermixer() {
  const [data, setData] = useState();

  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setInterval(async () => {
      getRemoteData().then((json) => {
        setData(json);
        console.log(json)
      });
    }, 2000);
  }, []);

  return (
    <div>
      <WaterCard
        waterState={data.isTimerOn}
        remainingTime={data.remainingSeconds}
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
