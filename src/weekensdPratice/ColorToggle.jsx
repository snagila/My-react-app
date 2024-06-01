import React, { useState } from "react";

const ColorToggle = () => {
  const [color, setColor] = useState("red");

  const colorToggle = () => {
    setColor(color === "red" ? "green" : "red");
  };
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        background: color,
        border: "1px solid black",
      }}
      onClick={colorToggle}
    ></div>
  );
};

export default ColorToggle;
