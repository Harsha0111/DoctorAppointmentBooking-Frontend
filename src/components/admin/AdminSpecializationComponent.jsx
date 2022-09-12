import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";
import { useState } from "react";

const AdminSpecializationComponent = () => {
  const [specialization, setSpecialization] = useState({ specialization: "" });
  const [specializationError, setSpecializationError] = useState({
    specialization: "",
  });

  return (
    <div className="card border p-3 mt-5">
      <div className="fs-4">Specialization</div>
      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Enter specialization"
          value={specialization.specialization}
          onChange={(event) => {
            let spl = event.target.value;
            if (spl.length > 2) {
              setSpecializationError({ specialization: "" });
            } else {
              setSpecializationError({
                specialization: "Enter atleast 2 characters",
              });
            }
            setSpecialization(spl);
          }}
        />
        <Button variant="primary ">Add</Button>
      </InputGroup>
      <Form.Text className="text-danger">
        {specializationError.specialization}
      </Form.Text>

      <div>
        <div className="fs-4 my-3">All Specializations</div>
        <Table striped bordered hover className="my-2">
          <thead>
            <tr>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ENT</td>
              <td>
                <span className="btn btn-primary btn-sm me-2">Edit</span>
                <span className="btn btn-danger btn-sm me-2">Delete</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminSpecializationComponent;
