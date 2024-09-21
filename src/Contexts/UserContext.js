import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserToken,
        isLoggedIn,
        setIsLoggedIn,
        userName,
        setUserName,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
