import React from "react";
import { Route } from "react-router-dom";
import UserSignup from "../../users/userSignup";
import Classes from "../classes";
import UserLogin from "../../users/userLogin";
import Homepage from "../homepage";
import PrivateRoute from "./PrivateRoute";

const FitnessRoutes = () => {
    return (
        <div>
            <PrivateRoute exact path="/classes" component={Classes} />
            <Route exact path="/" component={Homepage} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/homePage" component={Homepage} />

        </div>
    )
}

export default FitnessRoutes; 