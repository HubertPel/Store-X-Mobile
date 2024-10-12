import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";
import UserContext from "../Contexts/UserContext";
import LoginUser from "./LoginUser";

const DeleteUser = () => {
  const { apiUrl } = useContext(ApiContext);
  const { userToken } = useContext(UserContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);
  const { logoutUser } = LoginUser();

  const deleteAccount = async () => {
    const response = await fetch(apiUrl + "/users/removeUser/" + userToken, {
      method: "DELETE",
    });

    if (response.ok) {
      setErrorModalMessage(["Poprawnie usunięto konto"]);
      setShowErrorModal(true);
      logoutUser();
      return true;
    } else {
      setErrorModalMessage(["Wystąpił błąd serwera"]);
      setShowErrorModal(true);
    }
  };
  return { deleteAccount };
};

export default DeleteUser;
