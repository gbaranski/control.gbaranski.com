import React from "react";
import "./styles.css";

function Card(props) {
  console.log("created component");

  return (
    <div className="card">
      Temperature={props.temperature}
      <br></br>
      Humidity={props.humidity}
    </div>
  );
}

export default Card;
