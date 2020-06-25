import React from "react";
import { Route } from "react-router-dom";
import UserSignup from "../../clients/clientSignup";
import Classes from "../classes";
import Login from "../../clients/clientLogin";
import Homepage from "../homepage";
import PrivateRoute from "./PrivateRoute";
import InstructorSignup from "../../instructors/instructorSignup";


const FitnessRoutes = () => {
    return (
        <div>
            <PrivateRoute exact path="/classes" component={Classes} />
            <Route exact path="/" component={Homepage} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/instructorSignup" component={InstructorSignup} />
            <Route path="/login" component={Login} />
            <Route path="/homePage" component={Homepage} />
           


        </div>
    )
}

export default FitnessRoutes; 