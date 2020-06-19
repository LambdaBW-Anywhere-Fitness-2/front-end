import React from "react";
import { Route } from "react-router-dom";
import UserSignup from "../../users/userSignup";
import Classes from "../classes";
import UserLogin from "../../users/userLogin";
import Homepage from "../homepage";

const FitnessRoutes = () => {
    return (
        <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/classes" component={Classes} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/homePage" component={Homepage} />

        </div>
    )
}

export default FitnessRoutes; 