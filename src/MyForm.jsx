import React from "react";
import { useRef } from "react";

const MyForm = () => {
  const addressRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(addressRef.current.value);
  };

  const handleOnChange = (e) => {
    const str = e.target.value;
    console.log(str);
  };

  console.log(addressRef);
  return (
    <div>
      <form action="" className="card" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          {/* <input
            type="text"
            className="form-control"
            required
            placeholder="name"
            onChange={handleOnChange}
          /> */}
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
