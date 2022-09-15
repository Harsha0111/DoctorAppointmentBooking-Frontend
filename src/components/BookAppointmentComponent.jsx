import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

import AppBarComponent from "../components/common/AppBarComponent";
import { UserContext } from "../context/UserContext";

const BookAppointmentComponent = () => {
  const navigate = useNavigate();
  const { loggedInUser, doctorContext } = useContext(UserContext);

  const [book, setBook] = useState({
    date: "2022-09-15",
    userId: loggedInUser.id,
    doctorUserId: doctorContext.id,
  });

  useEffect(() => {
    console.log(doctorContext);
  }, [doctorContext]);

  const bookApi = (e) => {
    e.preventDefault();
    api
      .post("/appointment", book)
      .then((response) => {
        console.log(response);
        let data = response.data;
        if (data.data) {
          navigate("/");
        } else {
          console.log(data.error.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AppBarComponent />
      <div className="card rounded border m-5 p-3 bg-light">
        <p className="fs-5 fs-bold">Book Appointment</p>
        <label class="form-label">Specialization</label>

        {/* <select class="form-select"> */}
        {/* <option value="1">Select Specialization</option>
          <option value="1">Opthal</option>
          <option value="2">Cardiology</option>
          <option value="3">Neuro</option>
          <option value="4">Surgen</option>
          <option value="4">General</option> */}
        {/* </select> */}
        <input
          type="text"
          value={doctorContext.specialization}
          className="form-control"
          placeholder="name@example.com"
        />
        <label className="form-label mt-3">Doctor</label>
        {/* <select class="form-select">
          <option value="1">Select Doctor</option>
          <option value="1">Doc Arun</option>
          <option value="2">Doc Seetha</option>
          <option value="3">Doc Jasmine</option>
          <option value="4">Doc Varun</option>
        </select> */}
        <input
          type="text"
          value={doctorContext.fullName}
          class="form-control"
          placeholder="name@example.com"
        />
        <label class="form-label mt-3">Date</label>
        <input
          type="date"
          className="form-control"
          placeholder="name@example.com"
          value={book.date}
          onChange={(e) => setBook({ ...book, date: e.target.value })}
        />
        <button className="btn btn-primary mt-5" onClick={(e) => bookApi(e)}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentComponent;
