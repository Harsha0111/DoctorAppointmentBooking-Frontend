import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";
import api from "../../api/api";

const AdminViewAllDoctorsComponent = () => {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api
      .get(`/doctor/all`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setDoctors(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);

  const deleteApi = (e, id) => {
    api
      .delete(`/doctor/${id}`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setDoctors(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  const editApi = (e, id) => {
    api
      .delete(`/doctor/${id}`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setDoctors(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div className="card border p-3 mt-5">
      <div className="fs-4 my-3">All Doctors</div>
      <Table striped bordered hover className="my-2">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Age</th>
            <th>Experience (years)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {console.log(doctors)}
          {doctors.map((doctor) => {
            return (
              <tr key={doctor.id}>
                <td>{doctor.fullName}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.age}</td>
                <td>{doctor.experience}</td>
                <td>
                  <span
                    className="btn btn-primary btn-sm me-2"
                    onClick={(e) => editApi(e, doctor.id)}
                  >
                    Edit
                  </span>
                  <span
                    className="btn btn-danger btn-sm me-2"
                    onClick={(e) => deleteApi(e, doctor.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewAllDoctorsComponent;
