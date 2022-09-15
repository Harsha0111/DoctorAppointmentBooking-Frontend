import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useEffect } from "react";
import api from "../../api/api";

const INITIAL_VALUE = {
  id: 0,
  fullName: "",
  userName: "",
  email: "",
  password: "",
  specialization: "",
  specializationId: 0,
  age: "",
  experience: "",
};

const AdminDoctorComponent = () => {
  const { specializationContext } = useContext(UserContext);

  const [doctor, setDoctor] = useState(INITIAL_VALUE);
  const [doctorError, setDoctorError] = useState(INITIAL_VALUE);

  const { doctorsContext, setDoctorsContext } = useContext(UserContext);

  useEffect(() => {
    // console.log(specializationContext);
    if (specializationContext.length > 0 && specializationContext[0].id)
      setDoctor({ ...doctor, specializationId: specializationContext[0].id });
  }, [specializationContext]);

  const addDoctorApi = (e) => {
    e.preventDefault();
    if (doctor.id === 0) {
      api
        .post("/auth/registerDoctor", doctor)
        .then((response) => {
          // console.log(response);
          let data = response.data;
          if (data.data) {
            setDoctorsContext(response.data.data);
            setDoctor(INITIAL_VALUE);
            console.log(data.data);
          } else {
            console.log(data.error.message);
          }
        })
        .catch((err) => console.log(err));
    } else {
      api.put("/doctor", doctor).then((response) => {
        // console.log(response);
        let data = response.data;
        if (data.data) {
          console.log(data.data);
        } else {
          console.log(data.error.message);
        }
      });
    }
  };

  return (
    <>
      <div className="card border p-3 mt-5">
        <div className="fs-4">Doctor</div>
        <InputGroup className="mt-3">
          <Form.Control
            placeholder="Enter doctor name "
            value={doctor.fullName}
            onChange={(event) => {
              let doc = event.target.value;
              if (doc.length > 2) {
                setDoctorError({ ...doctorError, fullName: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  fullName: "Enter valid name",
                });
              }
              if (doctor.fullName.length === 0 && doctor.id !== 0)
                setDoctor(INITIAL_VALUE);
              else
                setDoctor({
                  ...doctor,
                  id: doctor.id,
                });
              setDoctor({ ...doctor, fullName: doc });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.fullName}</Form.Text>

        <InputGroup className="mt-3">
          <Form.Control
            placeholder="Enter user name "
            value={doctor.userName}
            onChange={(event) => {
              let userName = event.target.value;
              if (userName.length > 2) {
                setDoctorError({ ...doctorError, userName: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  userName: "Enter atleast 2 characters",
                });
              }
              setDoctor({ ...doctor, userName: userName });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.userName}</Form.Text>

        <InputGroup className="mt-3">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={doctor.email}
            onChange={(event) => {
              let email = event.target.value;
              if (email.length > 2) {
                setDoctorError({ ...doctorError, email: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  email: "Enter atleast 2 characters",
                });
              }
              setDoctor({ ...doctor, email: email });
            }}
          />
        </InputGroup>

        <Form.Text className="text-danger">{doctorError.email}</Form.Text>
        <Form.Select
          className="mt-3"
          aria-label="Default select example "
          onChange={(e) => {
            setDoctor({ ...doctor, specializationId: e.target.value });
          }}
        >
          {specializationContext.map((spl) => (
            <option value={spl.id}>{spl.specialization}</option>
          ))}
        </Form.Select>
        <InputGroup className="mt-3">
          <Form.Control
            type="number"
            placeholder="Age"
            value={doctor.age}
            onChange={(event) => {
              let age = event.target.value;
              if (age > 18) {
                setDoctorError({ ...doctorError, age: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  age: "Enter valid age",
                });
              }
              setDoctor({ ...doctor, age: age });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.age}</Form.Text>
        <InputGroup className="mt-3">
          <Form.Control
            type="number"
            placeholder="Experience "
            value={doctor.experience}
            onChange={(event) => {
              let experience = event.target.value;
              if (experience > 0) {
                setDoctorError({ ...doctorError, experience: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  experience: "Enter valid experience",
                });
              }
              setDoctor({ ...doctor, experience: experience });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.experience}</Form.Text>

        <InputGroup className="mt-3">
          <Form.Control
            type="password"
            placeholder="Password "
            value={doctor.password}
            onChange={(event) => {
              let password = event.target.value;
              if (password.length > 2) {
                setDoctorError({ ...doctorError, password: "" });
              } else {
                setDoctorError({
                  ...doctorError,
                  password: "Enter valid password",
                });
              }
              setDoctor({ ...doctor, password: password });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.password}</Form.Text>

        <Button variant="primary mt-3" onClick={(e) => addDoctorApi(e)}>
          {doctor.id === 0 ? "Add" : "Edit"}
        </Button>
      </div>
    </>
  );
};

export default AdminDoctorComponent;
