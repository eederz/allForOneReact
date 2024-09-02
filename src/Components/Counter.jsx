import React, { useState, useEffect } from "react";
import useCounter from "./CustomHooks/useCounter";
import useTitle from "./CustomHooks/useTitle";
const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter();
  const { title, changeTitle } = useTitle();

  useEffect(() => {
    changeTitle("Banana");
  }, []);

  function changeName(customName) {
    changeTitle(customName);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>CustomTitle: {title}</h2>
      <h2>Current Counter:{counter}</h2>
      <div className="operations">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <div className="string-operations">
          <button onClick={() => changeTitle("lalo")}>ChangeName</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
