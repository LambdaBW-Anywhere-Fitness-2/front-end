import React from "react";
import { Route } from "react-router-dom";
import UserSignup from "../../clients/clientSignup";
import ClientClasses from "../../clients/clientClasses";
import Login from "../Login";
import Homepage from "../homepage";
import PrivateRoute from "./PrivateRoute";
import InstructorClasses from "../../instructors/instructorClasses";
import InstructorSignup from "../../instructors/instructorSignup";
import UpdateInstructorClasses from "../../instructors/updateInstructorClass";

const FitnessRoutes = () => {
    return (
        <div>
            <PrivateRoute exact path="/clientClasses" component={ClientClasses} />
            <PrivateRoute exact path="/instructorClasses" component={InstructorClasses} />
            <Route exact path="/" component={Homepage} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/instructorSignup" component={InstructorSignup} />
            <Route path="/login" component={Login} />
            <Route path="/homePage" component={Homepage} />
            <Route path="/updateInstructorClass" component={UpdateInstructorClasses} />



        </div>
    )
}

export default FitnessRoutes; 