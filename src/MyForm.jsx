import React from "react";
import { useRef } from "react";

const MyForm = () => {
  // uncontrolled form
  const addressRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(addressRef.current.value);
  };

  //   controlled form
  const handleOnChange = (e) => {
    const str = e.target.value;
    console.log(str);
    console.log(e);
  };

  console.log(addressRef);
  return (
    <div>
      <form action="" className="card" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            placeholder="name"
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="form-control"
            required
            placeholder="adress"
            ref={addressRef}
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
