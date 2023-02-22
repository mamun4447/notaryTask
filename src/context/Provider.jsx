import React, { createContext, useState } from "react";

export const context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <context.Provider value={{ data, setData }}>{children}</context.Provider>
  );
};

export default Provider;
