import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const AppBarComponent = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Hospital Management</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {loggedInUser.isLoggedIn ? (
                <>
                  <div className="text-white btn btn-outlined-primary">{loggedInUser.fullName}</div>
                  <div
                    className="text-white btn btn-outlined-primary"
                    onClick={(event) => {
                      event.preventDefault();
                      setLoggedInUser({ ...loggedInUser, isLoggedIn: false });
                      navigate("/login");
                    }}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <div
                  className="text-white btn btn-outlined-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate("/login");
                  }}
                >
                  Login
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBarComponent;
