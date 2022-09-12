import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Lottie from "react-lottie";
import animationData from "../../asset/animations/ani.json";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/api";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [loginError, setLoginError] = useState({
    userName: "",
    password: "",
  });

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loginApi = (event) => {
    event.preventDefault();
    api
      .post("/auth/login", login)
      .then((response) => {
        console.log(response);
        let data = response.data;
        if (data.data) {
          navigate("/");
          setLoggedInUser({
            id: data.data.id,
            userName: data.data.userName,
            fullName: data.data.fullName,
            role: "patient",
            isLoggedIn: true,
          });
        } else {
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
          <Col></Col>
          <Col className="m-1">
            <div className="card">
              <div className="p-3 mt-4 text-center">
                <h3>Sign In</h3>
              </div>
              <Lottie options={defaultOptions} height={270} width={400} />
              <div className="p-3 text-center">
                {/* // add floating */}
                <div className="inputbox form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="userName"
                    value={login.userName}
                    onChange={(event) => {
                      let userName = event.target.value;
                      if (userName.length > 2) {
                        setLoginError({ ...loginError, userName: "" });
                      } else {
                        setLoginError({
                          ...loginError,
                          userName: "Enter valid userName",
                        });
                      }
                      setLogin({ ...login, userName: userName });
                    }}
                  />
                  {/* add label */}
                  <label>User Name</label>
                </div>
                {/* move outside div */}
                <label className="form-text text-danger">
                  {loginError.userName}
                </label>

                <div className="inputbox form-floating ">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder="Password"
                    value={login.password}
                    onChange={(event) => {
                      let password = event.target.value;
                      if (password.length > 2) {
                        setLoginError({ ...loginError, password: "" });
                      } else {
                        setLoginError({
                          ...loginError,
                          password: "invalid password",
                        });
                      }
                      setLogin({ ...login, password: password });
                    }}
                  />
                  
                  <label className="form-text text-danger text-start">
                    {loginError.password}
                  </label>
                  <label>Password</label>
                </div>
               
              </div>

              <div className="text-center p-3 w-100">
                <button
                  className="btn btn-primary btn-block align-text-center w-100"
                  onClick={(event) => {
                    loginApi(event);
                  }}
                  disabled={
                    login.userName === "" ||
                    login.password === "" ||
                    login.userName.length < 3 ||
                    login.password.length < 3
                  }
                >
                  Sign In
                </button>
              </div>
              <div className="mb-3 text-center intro">
                <span className="d-block account">
                  Don't have account yet? <Link to="/register">Sign Up</Link>
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

export default LoginComponent;
