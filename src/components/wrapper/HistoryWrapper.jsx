import React from "react";
import { Container, Row } from "react-bootstrap";

const HistoryWrapper = ({ children }) => {
  return (
    <Container>
      <Row>
        <div className="card my-5">
          <div className="card-body">
            <h4 className="card-title">Appointment History</h4>
            <p className="card-description">All your previous appointments</p>
            {children}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default HistoryWrapper;
