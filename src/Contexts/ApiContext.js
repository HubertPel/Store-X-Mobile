import React, { createContext, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [apiUrl, setApiUrl] = useState("http://storex.ct8.pl:52114");
  const [apiKey, setApiKey] = useState("");

  return (
    <ApiContext.Provider
      value={{
        apiUrl,
        apiKey,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
