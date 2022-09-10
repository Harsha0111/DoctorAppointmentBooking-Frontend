import React, { useContext } from "react";

import "simplebar-react/dist/simplebar.min.css";

import PatientHomeComponent from "../patient/PatientHomeComponent";
import DoctorHomeComponent from "../doctor/DoctorHomeComponent";
import HomeWrapper from "../wrapper/HomeWrapper";
import { UserContext } from "../../context/UserContext";

const MainHomeComponent = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <HomeWrapper>
      {loggedInUser.role === "patient" ? (
        <PatientHomeComponent />
      ) : (
        <DoctorHomeComponent />
      )}
    </HomeWrapper>
  );
};

export default MainHomeComponent;
