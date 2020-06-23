import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import FitnessRoutes from "./routes/Routes";

import UserSignup from "../users/userSignup";
const Homepage = () => {
    return (



        <div>
            <h4>Welcome to Fitness Anywhere Homepage</h4>
            {/* <FitnessRoutes /> */}
            <Link to="/userLogin">Client Log In</Link>
            <Link to="/userSignup">Client Signup</Link>
        </div>

    )
}

export default Homepage;