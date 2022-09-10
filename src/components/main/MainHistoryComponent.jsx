import React, { useContext } from "react";
import Container from "react-bootstrap/Container";

import { UserContext } from "../../context/UserContext";
import PatientHistoryComponent from "../patient/PatientHistoryComponent";
import DoctorHistoryComponent from "../doctor/DoctorHistoryComponent";
import HistoryWrapper from "../wrapper/HistoryWrapper";

const MainHistoryComponent = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <HistoryWrapper>
      {loggedInUser.role === "patient" ? (
        <PatientHistoryComponent />
      ) : (
        <DoctorHistoryComponent />
      )}
    </HistoryWrapper>
  );
};

export default MainHistoryComponent;
