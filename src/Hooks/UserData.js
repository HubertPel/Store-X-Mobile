import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";
import UserContext from "../Contexts/UserContext";

const UserData = () => {
  const { apiUrl } = useContext(ApiContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);
  const { userToken } = useContext(UserContext);

  const getUserData = async () => {
    const response = await fetch(apiUrl + "/users/getUserByID/" + userToken, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setErrorModalMessage(["Wystąpił błąd w połączeniu z serwerem"]);
      setShowErrorModal(true);
      return false;
    }

    const responseData = await response.json();
    if (responseData.id) {
      return {
        name: responseData.name,
        email: responseData.email,
      };
    } else {
      setErrorModalMessage(["Wystąpił błąd w połączeniu z serwerem"]);
      setShowErrorModal(true);
      return false;
    }
  };
  return { getUserData };
};

export default UserData;
