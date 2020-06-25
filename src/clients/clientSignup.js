import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
<<<<<<< HEAD
// import Button from 'react-bootstrap/Button'
=======
// import { Button } from "react-bootstrap";
// import Spinner from "react-bootstrap/Spinner";

>>>>>>> chrisWestberg

const ClientSignup = props => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isFetching, setIsFetching] = useState(false)

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("handlesubmit", credentials);
        setIsFetching(true)
        axiosWithAuth()
            .post("/signup/client", credentials)
            .then(res => {
                console.log("data from the signup component: ", res);
                // setCredentials({
                //     name: "",
                //     email: "",
                //     password: ""
                // });
                setIsFetching(false);
                props.history.push("/login");
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

<<<<<<< HEAD:src/users/userSignup.js
                <button type="submit">
                    {/* {!credentials && < Spinner
=======
                <Button type="submit">
                    {isFetching ? (< Spinner className="mx-2"
>>>>>>> 7e76e2c73f19a5e04a60001dcff6ec8cc93f84c3:src/clients/clientSignup.js
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />) : ""}

                    Sign Up
                </button>
                <br />
                <Link to="/login">I already have a client account</Link>
                <br></br>
                <Link exact to="/"><button>Home</button></Link>

            </form>
        </div>
    )

}


export default ClientSignup;