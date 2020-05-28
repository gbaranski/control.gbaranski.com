import React, { useState, useEffect } from "react";
import WaterCard from "./card";
import { fetchUrl, getRemoteData } from "../helpers";
import { requestTypes } from "../types";

function Watermixer() {
  const [data, setData] = useState({
    isTimerOn: undefined,
    remainingSeconds: undefined,
  });

  const [blur, setBlur] = useState(false);

  useEffect(() => {
    setInterval(async () => {
      if (document.hasFocus()) {
        getRemoteData(requestTypes.GET_DATA_WATERMIXER).then((response) => {
          setData(response);
          console.log(response);
        });
      }
    }, 1000);
  }, []);

  return (
    <div>
      <WaterCard
        waterState={data.isTimerOn}
        remainingTime={data.remainingSeconds}
        startMixingFunction={async () => {
          setBlur(true);
          const headers = new Headers();
          await fetchUrl("/api/watermixer/start", headers);
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
