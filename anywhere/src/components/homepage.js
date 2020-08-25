import React from "react";

const homePage = () => {
  return (
    <div>
      <h4> Homepage</h4>

      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/userSignup">Client Signup</Link>
      <br></br>
      <Link to="/instructorSignup">Instructor Signup</Link>
    </div>
  );
};

export default homePage;
