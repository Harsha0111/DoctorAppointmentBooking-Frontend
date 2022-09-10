import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "react-lottie";
import animationData from "../../asset/animations/ani.json";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="reg text-center"></Col>
          <Col className="m-1">
            <div className="card">
              <div className="p-3 mt-4 text-center">
                <h3>Register</h3>
              </div>
              <Lottie options={defaultOptions} height={270} width={400} />
              <div className="p-3 text-center">
                <div className="inputbox">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Enter mail"
                  />

                  <i className="fa fa-user"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Name"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="User name"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Age"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Height"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Weight"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Password"
                  />
                  <i className="fa fa-lock"></i>
                </div>

                <div className="mt-3 inputbox">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Confirm Password"
                  />
                  <i className="fa fa-lock"></i>
                </div>
              </div>

              <div className="text-center p-3 w-100">
                <Link to="/login">
                  <button className="btn btn-primary btn-block align-text-center w-100">
                    Register
                  </button>
                </Link>
              </div>
              <div className="mb-3 text-center intro">
                <span className="d-block account">
                  Already have account? <Link to="/login">Sign Up</Link>
                </span>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterComponent;
