import React, { createContext, useState } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    fullName: "harshaSelvi",
    email: "",
    age: 0,
    userId: 0,
    userName: "",
    role: "",
    isLoggedIn: false,
  });
  const [doctorsContext, setDoctorsContext] = useState([]);
  const [doctorContext, setDoctorContext] = useState({});
  const [specializationContext, setSpecializationContext] = useState([]);

  // useEffect(() => {
  //   console.log(loggedInUser);
  // }, [loggedInUser]);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        specializationContext,
        setSpecializationContext,
        doctorsContext,
        setDoctorsContext,
        doctorContext,
        setDoctorContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
