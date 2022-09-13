import React, { useEffect, useState } from "react";

const DoctorProfileComponent = () => {
  const [doctorProfile, setDoctorProfile] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    specialization: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });
  const [doctorProfileError, setDoctorProfileError] = useState({
    email: "",
    fullName: "",
    userName: "",
    age: "",
    specialization: "",
    experience: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log(doctorProfile);
  }, [doctorProfile]);

  return (
    <div className="p-3 py-3 ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-right">Edit Profile</h6>
      </div>

      <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className=" form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={doctorProfile.userName}
              onChange={(event) => {
                let userName = event.target.value;
                if (userName.length > 2) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    userName: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    userName: "Enter valid User Name",
                  });
                }
                setDoctorProfile({ ...doctorProfile, userName: userName });
              }}
            />
            <label>User Name</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.userName}
          </label>
        </div>

        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={doctorProfile.fullName}
              onChange={(event) => {
                let fullName = event.target.value;
                if (fullName.length > 2) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    fullName: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    fullName: "Enter valid Full Name",
                  });
                }
                setDoctorProfile({ ...doctorProfile, fullName: fullName });
              }}
            />
            <label>Full Name</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.fullName}
          </label>
        </div>
      </div>

      <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className="form-floating ">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              value={doctorProfile.age}
              onChange={(event) => {
                let age = event.target.value;
                if (age > 18) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    age: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    age: "Enter valid age",
                  });
                }
                setDoctorProfile({ ...doctorProfile, age: age });
              }}
            />
            <label>Age</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.age}
          </label>
        </div>

        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="specialization"
              value={doctorProfile.specialization}
              onChange={(event) => {
                let specialization = event.target.value;
                if (specialization.length > 2) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    specialization: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    specialization: "Enter valid specialization",
                  });
                }
                setDoctorProfile({
                  ...doctorProfile,
                  specialization: specialization,
                });
              }}
            />
            <label>specialization</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.specialization}
          </label>
        </div>
      </div>

      <div className="inputbox row mt-2 ">
        <div className="col-md-6">
          <div className=" form-floating ">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={doctorProfile.email}
              onChange={(event) => {
                let email = event.target.value;
                if (email.length > 2) {
                  setDoctorProfileError({ ...doctorProfileError, email: "" });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    email: "Enter valid Email",
                  });
                }
                setDoctorProfile({ ...doctorProfile, email: email });
              }}
            />
            <label>Email</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.email}
          </label>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              value={doctorProfile.password}
              onChange={(event) => {
                let password = event.target.value;
                if (password.length > 2) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    password: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    password: "Enter valid Password",
                  });
                }
                setDoctorProfile({
                  ...doctorProfile,
                  password: password,
                });
              }}
            />
            <label>Password</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.newPassword}
          </label>
        </div>

        <div className="col-md-6 ">
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              placeholder=" experience"
              value={doctorProfile.experience}
              onChange={(event) => {
                let experience = event.target.value;
                if (experience.length > 0) {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    experience: "",
                  });
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    experience: "Enter valid  experience",
                  });
                }
                setDoctorProfile({ ...doctorProfile, experience: experience });
              }}
            />
            <label> experience</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.experience}
          </label>
        </div>

        <div className="col-md-6 ">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Confirm password"
              value={doctorProfile.confirmPassword}
              onChange={(event) => {
                let confirmPassword = event.target.value;
                if (confirmPassword.length > 2) {
                  if (confirmPassword === doctorProfile.password) {
                    setDoctorProfileError({
                      ...doctorProfileError,
                      confirmPassword: "",
                    });
                  } else {
                    setDoctorProfileError({
                      ...doctorProfileError,
                      confirmPassword:
                        "Password and confirm password does not match",
                    });
                  }
                } else {
                  setDoctorProfileError({
                    ...doctorProfileError,
                    confirmPassword: "Enter valid Password",
                  });
                }
                setDoctorProfile({
                  ...doctorProfile,
                  confirmPassword: confirmPassword,
                });
              }}
            />
            <label>Confirm Password</label>
          </div>
          <label className="form-text text-danger">
            {doctorProfileError.confirmPassword}
          </label>
        </div>
      </div>

      <div className="mt-4 text-right">
        <button
          className="btn btn-primary text-center"
          type="button"
          disabled={
            doctorProfile.email === "" ||
            doctorProfile.fullName === "" ||
            doctorProfile.userName === "" ||
            doctorProfile.age === "" ||
            doctorProfile.specialization === "" ||
            doctorProfile.experience === "" ||
            doctorProfile.password === "" ||
            doctorProfile.password !== doctorProfile.confirmPassword ||
            doctorProfile.email.length < 3 ||
            doctorProfile.fullName.length < 3 ||
            doctorProfile.userName.length < 3 ||
            parseInt(doctorProfile.age) < 18 ||
            parseInt(doctorProfile.experience) < 0 ||
            doctorProfile.specialization.length < 3 ||
            doctorProfile.password.length < 3 ||
            doctorProfile.confirmPassword.length < 3
          }
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorProfileComponent;
