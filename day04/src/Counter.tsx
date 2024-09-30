import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const changeMiuns = () => {
    setCounter((prev) => {
      return prev === 0 ? 0 : prev - 1;
    });
  };

  const changePlus = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <button onClick={changeMiuns}>-</button>
      <span style={{ backgroundColor: counter >= 10 ? "red" : "white" }}>
        {counter}
      </span>
      <button onClick={changePlus}>+</button>
    </>
  );
};

export default Counter;
