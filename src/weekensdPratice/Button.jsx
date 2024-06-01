import React from "react";

const Button = ({ name, submit }) => {
  return (
    <>
      <button onClick={submit}>{name}</button>
    </>
  );
};

export default Button;
