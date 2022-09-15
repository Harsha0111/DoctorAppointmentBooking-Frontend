import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import api from "../../api/api";

import UpcomingScheduleComponent from "../card/UpcomingScheduleScheduleComponent";

const DoctorComponent = () => {
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

  return (
    <div>
      <p className="fs-4 fs-bold m-2">Upcoming Schedule</p>
      <SimpleBar className="wrapScroll pb-3">
        {appointments.map((appointment) => (
          <UpcomingScheduleComponent
            isDoctor={true}
            id={appointment.appointmentId}
            doctorName={appointment.doctorName}
            // specialization={"Ent"}
            date={appointment.date}
          />
        ))}
      </SimpleBar>
    </div>
  );
};

export default DoctorComponent;
