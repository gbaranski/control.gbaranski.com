import React from "react";
import ReactDOM from "react-dom";
import Alarmclock from "./alarmclock/index";
import Watermixer from "./watermixer/index";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

ReactDOM.render(
  <Container>
    <Row>
      <Col xs={12} xl={6}>
        <Alarmclock />
      </Col>
      <Col xs={12} xl={6}>
        <Watermixer />
      </Col>
    </Row>
  </Container>,
  document.getElementById("root")
);
