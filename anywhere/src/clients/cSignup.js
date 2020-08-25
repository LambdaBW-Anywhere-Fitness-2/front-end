import React, { useState } from "react";

const CSignup = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmit", credentials);
    setIsFetching(true);
    axiosWithAuth()
      .post("/signup/client", credentials)
      .then((res) => {
        console.log("data from the signup component: ", res);
        // setCredentials({
        //     name: "",
        //     password: ""
        // });
        setIsFetching(false);
        props.history.push("/login");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        

        <button type="submit">
          Sign Up
        </button>
        <br />
        <Link to="/login">I already have an account</Link>
        <br></br>
        <Link exact to="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
};

export default CSignup;
