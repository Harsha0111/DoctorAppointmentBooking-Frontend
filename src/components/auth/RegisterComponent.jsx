import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "react-lottie";
import animationData from "../../asset/animations/ani.json";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    height: "",
    weight: "",
    password: "",
    confirmPassword: "",
  });
  const [registerError, setRegisterError] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    height: "",
    weight: "",
    password: "",
    confirmPassword: "",
  });

  const registerApi = (event) => {
    event.preventDefault();
    api
      .post("/auth/registerPatient", register)
      .then((response) => {
        let data = response.data;
        if (data.data) {
          navigate("/login");
        } else {
          // setLoggedInUser({
          //   id: data.data.id,
          //   userName: data.data.userName,
          //   role: "patient",
          //   isLoggedIn: true,
          // });
          console.log(data.error.message);
        }
      })
      .catch((err) => console.log(err));
  };
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
                <div className="inputbox form-floating  mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter mail"
                    value={register.email}
                    onChange={(event) => {
                      let email = event.target.value;
                      if (email.length > 2) {
                        setRegisterError({ ...registerError, email: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          email: "Enter valid email",
                        });
                      }
                      setRegister({ ...register, email: email });
                    }}
                  />
                  <label>Email</label>
                </div>
                <label className="form-text text-danger">
                  {registerError.email}
                </label>

                <div className="inputbox form-floating  mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Name"
                    value={register.fullName}
                    onChange={(event) => {
                      let name = event.target.value;
                      if (name.length > 2) {
                        setRegisterError({ ...registerError, fullName: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          fullName: "Enter valid name",
                        });
                      }
                      setRegister({ ...register, fullName: name });
                    }}
                  />
                  <label>Full Name</label>
                </div>
                <label className="form-text text-danger">
                  {registerError.fullName}
                </label>

                <div className="inputbox form-floating  mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="User name"
                    value={register.userName}
                    onChange={(event) => {
                      let name = event.target.value;
                      if (name.length > 2) {
                        setRegisterError({ ...registerError, userName: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          userName: "Enter valid name",
                        });
                      }
                      setRegister({ ...register, userName: name });
                    }}
                  />
                  <label>User Name</label>
                </div>
                <label className="form-text text-danger">
                  {registerError.userName}
                </label>

                <div className="inputbox form-floating  mt-3 ">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Age"
                    value={register.age}
                    onChange={(event) => {
                      let age = event.target.value;
                      if (age > 18) {
                        setRegisterError({ ...registerError, age: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          age: "Enter valid age",
                        });
                      }
                      setRegister({ ...register, age: age });
                    }}
                  />
                  <label>Age </label>
                </div>
                <label className="form-text text-danger">
                  {registerError.age}
                </label>
                <div className="inputbox form-floating  mt-3">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Height"
                    value={register.height}
                    onChange={(event) => {
                      let height = event.target.value;
                      if (height > 8) {
                        setRegisterError({ ...registerError, height: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          height: "Enter valid height",
                        });
                      }
                      setRegister({ ...register, height: height });
                    }}
                  />
                  <i className="fa fa-lock"></i>
                  <label>Height </label>
                </div>
                <label className="form-text text-danger">
                  {registerError.height}
                </label>

                <div className="inputbox form-floating mt-3">
                  <input
                    type="number"
                    className="form-control"
                    name=""
                    placeholder="Weight"
                    value={register.weight}
                    onChange={(event) => {
                      let weight = event.target.value;
                      if (weight > 3) {
                        setRegisterError({ ...registerError, weight: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          weight: "Enter valid Weight",
                        });
                      }
                      setRegister({ ...register, weight: weight });
                    }}
                  />
                  <i className="fa fa-lock"></i>
                  <label>Weight </label>
                </div>
                <label className="form-text text-danger">
                  {registerError.weight}
                </label>
                <div className="inputbox form-floating  mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Password"
                    value={register.password}
                    onChange={(event) => {
                      let password = event.target.value;
                      if (password.length > 2) {
                        setRegisterError({ ...registerError, password: "" });
                      } else {
                        setRegisterError({
                          ...registerError,
                          password: "Enter valid Password",
                        });
                      }
                      setRegister({ ...register, password: password });
                    }}
                  />
                  <i className="fa fa-lock"></i>
                  <label>Password </label>
                </div>
                <label className="form-text text-danger">
                  {registerError.password}
                </label>

                <div className="inputbox form-floating  mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Confirm Password"
                    value={register.confirmPassword}
                    onChange={(event) => {
                      let confirmPassword = event.target.value;
                      if (confirmPassword.length > 2) {
                        if (confirmPassword === register.password) {
                          setRegisterError({
                            ...registerError,
                            confirmPassword: "",
                          });
                        } else {
                          setRegisterError({
                            ...registerError,
                            confirmPassword: "Password and confirm password does not match",
                          });
                        }
                      } else {
                        setRegisterError({
                          ...registerError,
                          confirmPassword: "Enter valid Password",
                        });
                      }
                      setRegister({
                        ...register,
                        confirmPassword: confirmPassword,
                      });
                    }}
                  />
                  <label>Confirm Password </label>
                </div>
                <label className="form-text text-danger">
                  {registerError.confirmPassword}
                </label>
              </div>

              <div className="text-center p-3 w-100">
                <Link to="/login">
                  <button
                    className="btn btn-primary btn-block align-text-center w-100"
                    onClick={(e) => registerApi(e)}
                    disabled={
                      register.email === "" ||
                      register.userName === "" ||
                      register.fullName === "" ||
                      register.age === "" ||
                      register.height === "" ||
                      register.weight === "" ||
                      register.password === "" ||
                      register.confirmPassword === "" ||
                      register.password === register.confirmPassword ||

                      register.email.length < 3 ||
                      register.fullName.length < 3 ||
                      register.userName.length < 3 ||
                      register.age < 18 ||
                      register.height < 3 ||
                      register.weight < 3 ||
                      register.password.length < 3 ||
                      register.confirmPassword.length < 3
                    }
                  >
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
