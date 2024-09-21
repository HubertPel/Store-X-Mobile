import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";
import UserContext from "../Contexts/UserContext";

const UpdateUser = () => {
  const { apiUrl } = useContext(ApiContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);
  const { userToken } = useContext(UserContext);
  const validateData = async (formData) => {
    let errorArray = [];

    if (!formData.name || formData.name == "") {
      errorArray.push("Imię wymagane");
    }

    if (!formData.email || formData.email == "") {
      errorArray.push("Adres E-mail wymagany");
    }

    if (!formData.password || formData.password == "") {
      errorArray.push("Hasło wymagane");
    }

    if (formData.password != formData.repeatPassword) {
      errorArray.push("Pole hasło i powtórz hasło muszą być takie same");
    }

    return errorArray;
  };
  const updateUser = async (formData) => {
    const validationResult = await validateData(formData);

    if (validationResult.length != 0) {
      setErrorModalMessage(validationResult);
      setShowErrorModal(true);
      return;
    }

    const apiUpdateData = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };

    const response = await fetch(apiUrl + "/users/updateUser/" + userToken, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiUpdateData),
    });

    const responseData = await response.json();

    if (responseData.id != "" && responseData.id != undefined) {
      setErrorModalMessage(["Poprawnie zaktualizowano dane"]);
      setShowErrorModal(true);
      return true;
    } else {
      setErrorModalMessage(["Wystąpił błąd serwera"]);
      setShowErrorModal(true);
    }
  };
  return { updateUser };
};

export default UpdateUser;
