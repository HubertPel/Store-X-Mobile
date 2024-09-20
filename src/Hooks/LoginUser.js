import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";

const LoginUser = () => {
  const { apiUrl } = useContext(ApiContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);

  const validateData = async (formData) => {
    let errorArray = [];

    if (!formData.login || formData.login == "") {
      errorArray.push("Login wymagany");
    }

    if (!formData.password || formData.password == "") {
      errorArray.push("Hasło wymagane");
    }

    return errorArray;
  };

  const login = async (formData) => {
    const validationResult = await validateData(formData);

    if (validationResult.length != 0) {
      setErrorModalMessage(validationResult);
      setShowErrorModal(true);
      return;
    }

    const apiRegisterData = {
      email: formData.login,
      password: formData.password,
    };

    console.log(JSON.stringify(apiRegisterData));

    const response = await fetch(apiUrl + "/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRegisterData),
    });

    const responseData = await response.json();
    console.log(responseData);
  };
  return { login };
};

export default LoginUser;
