import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const HomeWrapper = ({ children }) => {
  return (
    <div className="container rounded border bg-white my-5">
      <div className="row">
        <Col className="p-3">{children}</Col>
      </div>
    </div>
  );
};

export default HomeWrapper;
