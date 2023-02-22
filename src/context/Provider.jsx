import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const context = createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState({});

  fetch(
    "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("Posted all the information!");
    });
  return (
    <context.Provider value={{ data, setData }}>{children}</context.Provider>
  );
};

export default Provider;
