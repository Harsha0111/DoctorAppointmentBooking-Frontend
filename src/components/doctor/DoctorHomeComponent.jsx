import React from "react";
import SimpleBar from "simplebar-react";

import UpcomingScheduleComponent from "../card/UpcomingScheduleScheduleComponent";

const DoctorComponent = () => {
  return (
    <div>
      <p className="fs-4 fs-bold m-2">Upcoming Schedule</p>
      <SimpleBar className="wrapScroll pb-3">
        <UpcomingScheduleComponent
          isDoctor={true}
          id={0}
          doctorName={"Doc Arjun"}
          specialization={"Ent"}
          date={"23.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={true}
          id={1}
          doctorName={"Doc Mega"}
          specialization={"Cardiology"}
          date={"24.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={true}
          id={2}
          doctorName={"Doc Arun"}
          specialization={"Opthal"}
          date={"30.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={true}
          id={2}
          doctorName={"Doc Sandhiya"}
          specialization={"Dermatalogy"}
          date={"12.11.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={true}
          id={2}
          doctorName={"Doc Varun"}
          specialization={"Neuro"}
          date={"18.11.2022"}
        />
        
      </SimpleBar>
    </div>
  );
};

export default DoctorComponent;
