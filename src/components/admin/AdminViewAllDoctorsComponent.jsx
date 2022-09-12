import React from "react";

import { Table } from "react-bootstrap";

const AdminViewAllDoctorsComponent = () => {
  return (
    <div className="card border p-3 mt-5">
      <div className="fs-4 my-3">All Specializations</div>
      <Table striped bordered hover className="my-2">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>Age</th>
            <th> Experience (years)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anitha</td>
            <td>Ent</td>
            <td>54</td>
            <td>15</td>
            <td>
              <span className="btn btn-primary btn-sm me-2">Edit</span>
              <span className="btn btn-danger btn-sm me-2">Delete</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewAllDoctorsComponent;
