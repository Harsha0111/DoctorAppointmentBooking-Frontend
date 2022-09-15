import React from "react";

const PatientHistoryComponent = ({ appointments }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr>
              <td>Doc {appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>
                <label className="badge text-bg-warning">Upcoming</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHistoryComponent;
