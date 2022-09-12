import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";
import { useState } from "react";


const AdminDoctorComponent = () => {
  const [doctor, setDoctor] = useState({
    doctorName: "",
    specialization: "",
    age: "",
    experience: "",
  });
  const [doctorError, setDoctorError] = useState({
    doctorName: "",
    specialization: "",
    age: "",
    experience: "",
  });
  return (
    <>
      <div className="card border p-3 mt-5">
        <div className="fs-4">Doctor</div> 
        <InputGroup className="mt-3">
          <Form.Control
            placeholder="Enter doctor name "
            value={doctor.doctorName}
            onChange={(event) => {
              let doc = event.target.value;
              if (doc.length > 2) {
                setDoctorError({ ...doctorError, doctorName: "" });
              } else {
                setDoctorError({
                  ...doctor,
                  doctorName: "Enter atleast 2 characters",
                });
              }
              setDoctor({ ...doctorError, doctorName: doc });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.doctorName}</Form.Text>
        <Form.Select className="mt-3" aria-label="Default select example ">
          <option>Select specialization</option>
          <option value="1">Ent</option>
          <option value="2">Ortho</option>
          <option value="3">Opthal</option>
          <option value="4">Cardiology</option>
          <option value="5">Dermatology</option>
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
                  ...doctor,
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
                  ...doctor,
                  experience: "Enter valid experience",
                });
              }
              setDoctor({ ...doctor,  experience: experience });
            }}
          />
        </InputGroup>
        <Form.Text className="text-danger">{doctorError.experience}</Form.Text>
        <Button variant="primary mt-3">Add</Button>
      </div>
    </>
  );
};

export default AdminDoctorComponent;
