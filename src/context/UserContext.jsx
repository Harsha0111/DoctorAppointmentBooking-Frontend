import React, { createContext, useState } from "react";
import { useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 0,
    userName: "",
    role: "doctor",
    // role: "patient",
    isLoggedIn: false,
  });

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
