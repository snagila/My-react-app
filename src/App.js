import { useState } from "react";
import "./App.css";
import PremCom, { Userbio } from "./UserComponent.jsx";

const App = () => {
  const [counter, setCounter] = useState(10);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  console.log(counter);
  return (
    <>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
};

export default App;
