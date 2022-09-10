import React from "react";
import SimpleBar from "simplebar-react";

import RecommendedDoctorComponent from "../card/RecommendedDoctorComponent";
import UpcomingScheduleComponent from "../card/UpcomingScheduleScheduleComponent";
import SearchComponent from "../card/SearchComponent";

const PatientHomeComponent = () => {
  return (
    <div>
      <p className="fs-4 fs-bold m-2">Search</p>
      <SearchComponent />
      <p className="fs-4 fs-bold m-2">Upcoming Schedule</p>
      <SimpleBar className="wrapScroll pb-3">
        <UpcomingScheduleComponent
          isDoctor={false}
          id={0}
          doctorName={"Doc Arjun"}
          specialization={"Ent"}
          date={"23.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={false}
          id={1}
          doctorName={"Doc Mega"}
          specialization={"Cardiology"}
          date={"24.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={false}
          id={2}
          doctorName={"Doc Arun"}
          specialization={"Opthal"}
          date={"30.10.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={false}
          id={3}
          doctorName={"Doc Sandhiya"}
          specialization={"Dermatalogy"}
          date={"12.11.2022"}
        />
        <UpcomingScheduleComponent
          isDoctor={false}
          id={4}
          doctorName={"Doc Varun"}
          specialization={"Neuro"}
          date={"18.11.2022"}
        />
      </SimpleBar>
      <p className="fs-4 fs-bold m-2">Recommended Doctors</p>
      <SimpleBar className="wrapScroll pb-3">
        <RecommendedDoctorComponent
          id={0}
          doctorName={"Doc Seetha"}
          specialization={"Opthal"}
        />
        <RecommendedDoctorComponent
          id={1}
          doctorName={"Doc Ram"}
          specialization={"Neuro"}
        />
        <RecommendedDoctorComponent
          id={2}
          doctorName={"Doc Varun"}
          specialization={"Surgen"}
        />
        <RecommendedDoctorComponent
          id={3}
          doctorName={"Doc Sandhiya"}
          specialization={"Dermatology"}
        />
        <RecommendedDoctorComponent
          id={4}
          doctorName={"Doc Vijay"}
          specialization={"Neuro"}
        />
      </SimpleBar>
    </div>
  );
};

export default PatientHomeComponent;
