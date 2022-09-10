import React from "react";

const DoctorHistoryComponent = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Samuktha </td>
            <td>12 OCT 2022</td>
            <td>
              <label className="badge text-bg-success">Completed</label>
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>28 OCT 2022</td>

            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td> Jasmine </td>
            <td>28 NOV 2022</td>

            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td>Maga </td>
            <td>16 DEC 2022</td>
            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td>Suresh</td>
            <td>20 DEC 2022</td>
            <td>
              <label className="badge text-bg-warning">In progress</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorHistoryComponent;
