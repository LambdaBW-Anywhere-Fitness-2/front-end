import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserSignup = props => {
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

        axios
            .post("api", credentials)
            .then(res => {
                console.log("data from the signup component: ", res);
                setCredentials({
                    name: "",
                    email: "",
                    password: ""
                });
                props.history.push("/userlogin");
            })
            .catch(err => {
                console.error(err.message)
            });

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
                    <button type="submit">Sign Up</button>
                    <br />
                    <Link to="/userlogin">I already have a user account</Link>
                </form>
            </div>
        )

    }
}

export default UserSignup;