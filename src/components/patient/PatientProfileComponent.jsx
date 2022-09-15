import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

const PatientProfileComponent = () => {
  const [patientProfile, setPatientProfile] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    height: "",
    weight: "",
    password: "",
    confirmPassword: "",
  });
  const [patientProfileError, setPatientProfileError] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    height: "",
    weight: "",
    password: "",
    confirmPassword: "",
  });
  
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log(patientProfile);
    setPatientProfile({
      ...patientProfile,
      id: loggedInUser.id,
      userName: loggedInUser.userName,
      fullName: loggedInUser.fullName,
      email: loggedInUser.email,
      age: loggedInUser.age,
    });
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <div className="p-3 py-3 ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-right">Profile</h6>
      </div>

      <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className=" form-floating">
            <input
              type="text"
              disabled
              className="form-control"
              placeholder="User Name"
              value={patientProfile.userName}
              onChange={(event) => {
                let userName = event.target.value;
                if (userName.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    userName: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    userName: "Enter valid User Name",
                  });
                }
                setPatientProfile({ ...patientProfile, userName: userName });
              }}
            />
            <label>User Name</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.userName}
          </label>
        </div>

        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              disabled
              className="form-control"
              placeholder="Full Name"
              value={patientProfile.fullName}
              onChange={(event) => {
                let fullName = event.target.value;
                if (fullName.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    fullName: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    fullName: "Enter valid Full Name",
                  });
                }
                setPatientProfile({ ...patientProfile, fullName: fullName });
              }}
            />
            <label>Full Name</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.fullName}
          </label>
        </div>
      </div>

      <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              disabled
              value={patientProfile.age}
              onChange={(event) => {
                let age = event.target.value;
                if (age.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    age: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    age: "Enter valid age",
                  });
                }
                setPatientProfile({ ...patientProfile, age: age });
              }}
            />
            <label>Age</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.age}
          </label>
        </div>
        <div className="col-md-6">
          <div className=" form-floating ">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              disabled
              value={patientProfile.email}
              onChange={(event) => {
                let email = event.target.value;
                if (email.length > 2) {
                  setPatientProfileError({ ...patientProfileError, email: "" });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    email: "Enter valid Email",
                  });
                }
                setPatientProfile({ ...patientProfile, email: email });
              }}
            />
            <label>Email</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.email}
          </label>
        </div>
      </div>

      {/* <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Height"
              value={patientProfile.height}
              onChange={(event) => {
                let height = event.target.value;
                if (height.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    height: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    height: "Enter valid Height",
                  });
                }
                setPatientProfile({ ...patientProfile, height: height });
              }}
            />
            <label>Height</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.height}
          </label>
        </div>

        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="New password"
              value={patientProfile.newPassword}
              onChange={(event) => {
                let newPassword = event.target.value;
                if (newPassword.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    newPassword: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    newPassword: "Enter valid New Password",
                  });
                }
                setPatientProfile({
                  ...patientProfile,
                  newPassword: newPassword,
                });
              }}
            />
            <label>New Password</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.newPassword}
          </label>
        </div>

        <div className="col-md-6 ">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Weight"
              value={patientProfile.weight}
              onChange={(event) => {
                let weight = event.target.value;
                if (weight.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    weight: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    weight: "Enter valid Weight",
                  });
                }
                setPatientProfile({ ...patientProfile, weight: weight });
              }}
            />
            <label>Weight</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.weight}
          </label>
        </div>

        <div className="col-md-6 ">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              value={patientProfile.confirmPassword}
              onChange={(event) => {
                let confirmPassword = event.target.value;
                if (confirmPassword.length > 2) {
                  setPatientProfileError({
                    ...patientProfileError,
                    confirmPassword: "",
                  });
                } else {
                  setPatientProfileError({
                    ...patientProfileError,
                    confirmPassword: "Enter valid Confrim Password",
                  });
                }
                setPatientProfile({
                  ...patientProfile,
                  confirmPassword: confirmPassword,
                });
              }}
            />
            <label>Confirm Password</label>
          </div>
          <label className="form-text text-danger">
            {patientProfileError.confirmPassword}
          </label>
        </div>
      </div>

      <div className="mt-4 text-right">
        <button className="btn btn-primary text-center" type="button">
          Save Profile
        </button>
      </div> */}
    </div>
  );
};

export default PatientProfileComponent;
