import React from "react";
import Counter from "./Components/Counter";
import "./styles.css";
import FamilyTree from "./Components/FamilyTree";
import { MainContextProvider } from "./Context/MainContext";
const App = () => {
  return (
    <div className="App">
      <MainContextProvider>
        <Counter />
        <FamilyTree />
      </MainContextProvider>
    </div>
  );
};

export default App;
