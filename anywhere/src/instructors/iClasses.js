import React from "react";
import { Link } from "react-router-dom";

const iClasses = () => {
  return (
    <div>
      <h4>Instructor class</h4>
      <Link exact to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default iClasses;
