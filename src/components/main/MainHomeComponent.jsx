import React, { useContext, useEffect } from "react";

import "simplebar-react/dist/simplebar.min.css";

import PatientHomeComponent from "../patient/PatientHomeComponent";
import DoctorHomeComponent from "../doctor/DoctorHomeComponent";
import HomeWrapper from "../wrapper/HomeWrapper";
import { UserContext } from "../../context/UserContext";
import api from "../../api/api";

const MainHomeComponent = () => {
  const { loggedInUser, setDoctorsContext } = useContext(UserContext);
  
  useEffect(() => {
    api
      .get(`/doctor/all`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setDoctorsContext(res.data.data);
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
