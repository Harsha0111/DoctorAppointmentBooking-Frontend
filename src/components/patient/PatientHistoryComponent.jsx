import React from "react";

const PatientHistoryComponent = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doc Samuktha </td>
            <td>Ent</td>
            <td>12 OCT 2022</td>

            <td>
              <label className="badge text-bg-success">Completed</label>
            </td>
          </tr>
          <tr>
            <td>Doc John</td>
            <td>Heart</td>
            <td>28 OCT 2022</td>

            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td>Doc Jasmine </td>
            <td>Opthal</td>
            <td>28 NOV 2022</td>

            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td>Doc Maga </td>
            <td>Ortho</td>
            <td>16 DEC 2022</td>
            <td>
              <label className="badge text-bg-warning">Upcoming</label>
            </td>
          </tr>
          <tr>
            <td>Doc Suresh</td>
            <td>Neuro</td>
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

export default PatientHistoryComponent;
