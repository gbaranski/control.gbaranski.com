import React, { useState, useEffect } from "react";
import WaterCard from "./card";
import { fetchUrl, getRemoteData } from "../helpers";
import { requestTypes } from "../types";

function Watermixer() {
  const [data, setData] = useState({
    isTimerOn: false,
    remainingSeconds: 0,
  });

  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setInterval(async () => {
      if (document.hasFocus()) {
        getRemoteData(requestTypes.GET_DATA_WATERMIXER).then((json) => {
          setData(json);
          console.log(json);
        });
      }
    }, 2000);
  }, []);

  return (
    <div>
      <WaterCard
        waterState={data.isTimerOn}
        remainingTime={data.remainingSeconds}
        startMixingFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          await fetchUrl("/startMixing", headers);
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
