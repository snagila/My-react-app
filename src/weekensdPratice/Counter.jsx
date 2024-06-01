import React, { useState } from "react";

const Counter = () => {
  const [counterNumber, setCounterNumber] = useState(0);
  return (
    <div className="mt-6">
      <div>{counterNumber}</div>
      <button onClick={() => setCounterNumber(counterNumber + 1)}>+</button>
      <button onClick={() => setCounterNumber(counterNumber - 1)}>-</button>
    </div>
  );
};

export default Counter;
