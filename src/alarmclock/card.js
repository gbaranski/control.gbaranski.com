import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "/home/gbaranski/code/javascript/control.gbaranski.com/src/bootstrap.min.css";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import humidityIcon from "./assets/humidity.png";
import temperatureIcon from "./assets/temperature.png";

function Cardbody(props) {
  const isLoading = props.isLoading;

  return (
    <Card className={`card center bg-dark ${isLoading ? "blur" : " "}`}>
      <Card.Header className="header">Alarm clock</Card.Header>
      <Card.Body>
        <Card.Text>
          Currently alarm is set to:{" "}
          <span className="time">{props.alarmTime || "Loading..."}</span>
          <br></br>
          Remaining time:{" "}
          <span className="time">{props.remainingTime || "Loading..."}</span>
          <br></br>
          Current alarm state: <span className="time">{props.alarmState}</span>
          <br></br>
          <img src={temperatureIcon} alt="temperatureIcon"></img>
          <span>{props.temperature || "Loading..."}°C</span>
          <br></br>
          <img src={humidityIcon} width="150px" alt="humidityIcon"></img>
          <span>{props.humidity || "Loading..."}%</span>
          <br></br>
          Choose the alarm time here:{" "}
          <input
            className="timepicker bg-dark"
            type="time"
            id="alarmTime"
          ></input>
        </Card.Text>
        <Button variant="primary" onClick={props.sendDataToRemoteFunction}>
          Send time data
        </Button>
        <Button variant="primary">Switch state</Button>
        <Button variant="primary">Test alarm!</Button>
        <div className="loader">
          <ClipLoader size={150} color="#123abc" loading={isLoading} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cardbody;
