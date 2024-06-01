import React, { useState } from "react";

const LearnState = () => {
  // logic
  const [state, setState] = useState("Dented Code");
  const handleOnClick = () => {
    setState("anajan");
  };
  console.log(state);
  return (
    <>
      {state}
      <button onClick={handleOnClick}>Change name</button>
    </>
  );
};

export default LearnState;
