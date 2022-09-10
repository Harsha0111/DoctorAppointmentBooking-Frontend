import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaHome, FaUserCircle, FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container className="w-100">
          <Nav className="m-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <FaHome size={25} />
              <span>Home</span>
            </Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link
              as={Link}
              to="/profile"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <FaUserCircle size={25} />
              <span>Profile</span>
            </Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link
              as={Link}
              to="/history"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <FaHistory size={25} />
              <span>History</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default FooterComponent;
