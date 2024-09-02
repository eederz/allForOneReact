import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [gretelAge, setGretelAge] = useState(0);
  const [hanzelAge, setHanzelAge] = useState(0);
  const values = {
    gretelAge,
    setGretelAge,
    hanzelAge,
    setHanzelAge,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
