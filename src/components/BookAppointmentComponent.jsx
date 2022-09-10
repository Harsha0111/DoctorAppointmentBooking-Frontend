import React from "react";

import AppBarComponent from "../components/common/AppBarComponent";

const BookAppointmentComponent = () => {
  return (
    <div>
      <AppBarComponent />
      <div className="card rounded border m-5 p-3 bg-light">
        <p className="fs-5 fs-bold">Book Appointment</p>
        <label class="form-label">Specialization</label>

        <select class="form-select">
          <option value="1">Select Specialization</option>
          <option value="1">Opthal</option>
          <option value="2">Cardiology</option>
          <option value="3">Neuro</option>
          <option value="4">Surgen</option>
          <option value="4">General</option>
        </select>
        <label class="form-label mt-3">Doctor</label>
        <select class="form-select">
          <option value="1">Select Doctor</option>
          <option value="1">Doc Arun</option>
          <option value="2">Doc Seetha</option>
          <option value="3">Doc Jasmine</option>
          <option value="4">Doc Varun</option>
        </select>
        <label class="form-label mt-3">Date</label>
        <input
          type="date"
          class="form-control"
          placeholder="name@example.com"
        />
        <button className="btn btn-primary mt-5">Book Appointment</button>
      </div>
    </div>
  );
};

export default BookAppointmentComponent;
