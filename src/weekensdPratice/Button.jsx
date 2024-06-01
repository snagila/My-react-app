import React from "react";

const Button = ({ name, submit }) => {
  return (
    <>
      <button onClick={submit} className="btn btn-primary">
        {name}
      </button>
    </>
  );
};

export default Button;
