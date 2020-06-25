import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Homepage = () => {
    return (



        <div>
            <h4> Homepage</h4>
            {/* <FitnessRoutes /> */}
            <Link to="/login">Log In</Link>
            <br></br>
            <Link to="/userSignup">Client Signup</Link>
            <br></br>
            <Link to="/instructorSignup">Instructor Signup</Link>
        </div>

    )
}

export default Homepage;