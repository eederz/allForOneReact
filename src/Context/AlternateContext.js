import React, { createContext, useState } from "react";

export const AlternateContext = createContext();

export const AlternateContextProvider = ({ children }) => {
  const [alternateLegend, setAlternateLegend] = useState("Valachia");

  const values = {
    alternateLegend,
    setAlternateLegend,
  };

  return (
    <AlternateContext.Provider value={values}>
      {children}
    </AlternateContext.Provider>
  );
};
