import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AlarmCard(props: any) {
  const isLoading = props.isLoading;

  return (
    <Card className={`card center bg-dark ${isLoading ? "blur" : " "}`}>
      <Card.Header className="header">Watermixer</Card.Header>
      <Card.Body>
        <Card.Text>
          Currently water should be:{" "}
          <span className="time">
            {props.waterState === undefined
              ? "Loading"
              : props.waterState === "1"
              ? "warm"
              : "cold"}
            <br></br>
          </span>
          Remaining time:{" "}
          <span className="time">
            {props.remainingTime === undefined
              ? "Loading"
              : Math.floor((props.remainingTime / 60) % 60) +
                "minutes" +
                (props.remainingTime % 60) +
                "seconds"}
          </span>
          <br></br>
        </Card.Text>
        <Button variant="primary" onClick={props.startMixingFunction}>
          Start mixing water
        </Button>
        <div className="loader">
          <ClipLoader size={150} color="#123abc" loading={isLoading} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AlarmCard;
