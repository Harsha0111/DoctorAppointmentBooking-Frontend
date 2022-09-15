import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { UserContext } from "../../context/UserContext";
import PatientHistoryComponent from "../patient/PatientHistoryComponent";
import DoctorHistoryComponent from "../doctor/DoctorHistoryComponent";
import HistoryWrapper from "../wrapper/HistoryWrapper";
import api from "../../api/api";

const MainHistoryComponent = () => {
  
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

  const { loggedInUser } = useContext(UserContext);
  return (
    <HistoryWrapper>
      {loggedInUser.role === "patient" ? (
        <PatientHistoryComponent appointments={appointments}/>
      ) : (
        <DoctorHistoryComponent  appointments={appointments}/>
      )}
    </HistoryWrapper>
  );
};

export default MainHistoryComponent;
