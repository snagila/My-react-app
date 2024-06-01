import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

const Form = () => {
  const submit = () => {
    console.log("btn clicked");
  };
  return (
    <>
      <form action="">
        <Input type="email" id="email" placeholder="Please enter your email" />
        <Input type="text" id="phone " placeholder="Please enter your phone" />
        <Button name="Submit" submit={submit} />
      </form>
    </>
  );
};

export default Form;
