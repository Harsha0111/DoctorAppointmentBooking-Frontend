import React, { useEffect } from "react";
import SimpleBar from "simplebar-react";

import RecommendedDoctorComponent from "../card/RecommendedDoctorComponent";
import UpcomingScheduleComponent from "../card/UpcomingScheduleScheduleComponent";
import SearchComponent from "../card/SearchComponent";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";
import api from "../../api/api";

const PatientHomeComponent = () => {
  const { doctorsContext } = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api
      .get(`/appointment/all`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setAppointments(res.data.data);
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

  const deleteAPI = (event, id) => {
    event.preventDefault();
    api.delete(`/appointment/${id}`).then(
      (response) => {
        console.log(response);
        let data = response.data;
        if (data.data) {
          console.log(data.data);
          setAppointments(data.data);
          // setSpecialization(data.data);
        } else {
          console.log(data.error.message);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      {/* <p className="fs-4 fs-bold m-2">Search</p>
      <SearchComponent /> */}
      <p className="fs-4 fs-bold m-2">Upcoming Schedule</p>
      <SimpleBar className="wrapScroll pb-3">
        {appointments.map((appointment) => (
          <UpcomingScheduleComponent
            isDoctor={false}
            id={appointment.appointmentId}
            doctorName={appointment.doctorName}
            // specialization={"Ent"}
            deleteAPI={deleteAPI}
            date={appointment.date}
          />
        ))}
      </SimpleBar>
      <p className="fs-4 fs-bold m-2">All Doctors</p>
      <SimpleBar className="wrapScroll pb-3">
        {doctorsContext.map((doctor) => {
          return <RecommendedDoctorComponent id={0} doctor={doctor} />;
        })}
      </SimpleBar>
    </div>
  );
};

export default PatientHomeComponent;
