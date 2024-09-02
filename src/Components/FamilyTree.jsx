import React, { useContext, useEffect } from "react";
import { MainContext } from "../Context/MainContext";
import {
  AlternateContextProvider,
  AlternateContext,
} from "../Context/AlternateContext";

const Sister = () => {
  const { gretelAge, setGretelAge } = useContext(MainContext);
  useEffect(() => {
    setGretelAge(17);
  }, []);
  return <h1>Hi, I'm the Gretel, I'm {gretelAge} years old</h1>;
};

const Brother = () => {
  const { alternateLegend, setAlternateLegend } = useContext(AlternateContext);
  const { hanzelAge, setHanzelAge } = useContext(MainContext);
  useEffect(() => {
    setHanzelAge(19);
  }, []);
  return (
    <h1>
      Hi, I'm the Hanzel, Im' {hanzelAge} years old, Im from {alternateLegend}
    </h1>
  );
};

const FamilyTree = () => {
  return (
    <>
      <AlternateContextProvider>
        <Sister />
        <Brother />
      </AlternateContextProvider>
    </>
  );
};

export default FamilyTree;
