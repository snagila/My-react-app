import { useState } from "react";
import "./App.css";
import UserProfile from "./UserProfile.jsx";

const App = () => {
  return (
    <div className="userPage" style={{ background: "black", color: "white" }}>
      <UserProfile />
    </div>
  );
};

export default App;
