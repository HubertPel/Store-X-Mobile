import React, { createContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = (props) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  return (
    <ErrorContext.Provider
      value={{
        showErrorModal,
        setShowErrorModal,
        errorModalMessage,
        setErrorModalMessage,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
