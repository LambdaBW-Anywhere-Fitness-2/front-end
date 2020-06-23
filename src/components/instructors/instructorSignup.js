import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from "react-bootstrap";



const InstructorSignup = props => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("handlesubmit", credentials);
        axiosWithAuth()
            .post("/signup/client", credentials)
            .then(res => {
                console.log("data from the signup component: ", res);
                // setCredentials({
                //     name: "",
                //     email: "",
                //     password: ""
                // });
                props.history.push("/instructorLogin");
            })
            .catch(err => {
                console.error(err.message)
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={credentials.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />

                <Button type="submit">
                    Sign Up
                </Button>
                <br />
                <Link to="/instructorLogin">I already have an instructor account</Link>
                <br></br>
                <Link exact to="/"><Button>Home</Button></Link>

            </form>
        </div>
    )

}


export default InstructorSignup;