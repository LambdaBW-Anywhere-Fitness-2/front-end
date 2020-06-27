import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
// import Button from 'react-bootstrap/Button'

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
                <h4 className="clientSignUpTitle">Client Sign Up</h4>
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

                <br />
                <Link to="/login" className="already">I already have a client account</Link>
                <br />
                <Button type="submit">
                    {isFetching ? (< Spinner className="mx-2"


                <button type="submit">
                    {/* {/* {!credentials && < Spinner

                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"

                    />) : ""}

                    />) : ""} */}


                    Sign Up
                </button>
                <br />

                <Link exact to="/"><Button>Home</Button></Link>

                <Link to="/login">I already have a client account</Link>
                <br></br>
                <Link exact to="/"><button>Home</button></Link>




            </form>
        </div>
    )

}


export default ClientSignup;