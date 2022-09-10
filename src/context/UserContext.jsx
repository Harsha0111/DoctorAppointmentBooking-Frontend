import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    userId: 0,
    userName: "",
    // role: "doctor",
    role: "patient",
    isLoggedIn: true,
  });

  // const searchContact = (userName) => {
  //   return contacts.reduce((acc, curr) => {
  //     if (curr.name === userName) {
  //       acc = curr;
  //     }
  //     return acc;
  //   }, {});
  // };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
