import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";

const CreateUser = () => {
  const { apiUrl } = useContext(ApiContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);

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
  const addUser = async (formData) => {
    const validationResult = await validateData(formData);

    if (validationResult.length != 0) {
      setErrorModalMessage(validationResult);
      setShowErrorModal(true);
      return;
    }

    const apiRegisterData = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };

    const response = await fetch(apiUrl + "/users/addUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRegisterData),
    });

    const responseData = await response.json();

    if (responseData.id != "" && responseData.id != undefined) {
      setErrorModalMessage(["Poprawnie utworzono konto możesz sie zalogować"]);
      setShowErrorModal(true);
      return true;
    } else {
      setErrorModalMessage(["Wystąpił błąd serwera"]);
      setShowErrorModal(true);
    }
  };
  return { addUser };
};

export default CreateUser;
