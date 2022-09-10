import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { UserContext } from "../../context/UserContext";

import DoctorProfileComponent from "../doctor/DoctorProfileComponent";
import PatientProfileComponent from "../patient/PatientProfileComponent";
import ProfileWrapper from "../wrapper/ProfileWrapper";

const MainProfileComponent = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <ProfileWrapper>
      {loggedInUser.role === "patient" ? (
        <PatientProfileComponent />
      ) : (
        <DoctorProfileComponent />
      )}
    </ProfileWrapper>
  );
};

export default MainProfileComponent;
