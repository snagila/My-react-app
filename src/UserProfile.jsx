import React from "react";
import persom from "./assets/drew-hays-Kt8eGw8_S8Y-unsplash.jpg";

const UserProfile = () => {
  return (
    <div className="card">
      <div className="img">
        <img src={persom} alt="" width={"100px"} />
      </div>
      <div className="info">
        <h1 className="text-danger">Sachin Nagila</h1>
        <p>Lorem, ipsum dolor sit</p>
      </div>
    </div>
  );
};

export default UserProfile;
