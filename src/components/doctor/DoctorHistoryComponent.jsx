import React from "react";

const DoctorHistoryComponent = ({ appointments}) => {
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

export default DoctorHistoryComponent;
