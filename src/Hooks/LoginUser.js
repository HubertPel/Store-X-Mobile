import React, { useContext } from "react";
import ApiContext from "../Contexts/ApiContext";
import ErrorContext from "../Contexts/ErrorContext";
import UserContext from "../Contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LoginUser = () => {
  const { apiUrl } = useContext(ApiContext);
  const { setShowErrorModal, setErrorModalMessage } = useContext(ErrorContext);
  const { setIsLoggedIn, setUserToken, setUserName } = useContext(UserContext);

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

    const response = await fetch(apiUrl + "/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRegisterData),
    });

    if (!response.ok) {
      setErrorModalMessage(["Błędny login lub hasło"]);
      setShowErrorModal(true);
      return false;
    }

    const responseData = await response.json();
    if (responseData.id) {
      setUserToken(responseData.id);
      setUserName(responseData.name);

      await AsyncStorage.setItem("userToken", responseData.id);
      await AsyncStorage.setItem("userName", responseData.name);
      await AsyncStorage.setItem("isLoggedIn", "1");

      setIsLoggedIn(true);
    } else {
      setErrorModalMessage(["Błędny login lub hasło"]);
      setShowErrorModal(true);
      return false;
    }
  };

  const checkIfLogged = async () => {
    const userName = await AsyncStorage.getItem("userName");
    const userToken = await AsyncStorage.getItem("userToken");
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

    if (userName && userToken && isLoggedIn) {
      setUserToken(userToken);
      setUserName(userName);
      setIsLoggedIn(true);
    } else {
      setUserToken("");
      setUserName("");
      setIsLoggedIn(false);
    }
  };

  const logoutUser = async () => {
    setUserToken("");
    setUserName("");
    setIsLoggedIn(false);
  };

  return { login, checkIfLogged, logoutUser };
};

export default LoginUser;
