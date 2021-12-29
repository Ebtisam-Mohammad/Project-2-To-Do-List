import React, { useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom"


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);
  const [loginMessage, setLoginMessage] = useState("");
  // 200 ||  400 ||  404
  const loginFunc = (e) => {
    e.preventDefault()
    const userInfo = {
      // "email":email
      email,
      password,
    };
    axios
    .post(`http://localhost:5000/users/login`, userInfo)
      .then((response) => {
        setLoginStatus(response.status);
        setLoginMessage(response.data.message);
        // console.log("DATA: ", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        // console.log("ERR: ", err);
        setLoginStatus(err.response.status);
        setLoginMessage(err.response.data.message);
        props.setIsLoggedIn(false);
        props.setUsername(null);
      });
  };
  return (
    <div className="Login">
    <h4 className="text"><b>WELCOM BACK!</b></h4>
    <p className="text"><b>We are happy to see you again.</b></p>
      <form className="d-grid gap-3">
        <div className="form-floating m-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            // placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="m-3 form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            // placeholder="Write password here ..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        {loginStatus === 200 && (
          <div class="alert alert-success text-center" role="alert">
            {loginMessage}
          </div>
        )}

        {(loginStatus === 400 || loginStatus === 404) && (
          <div class="alert alert-danger text-center" role="alert">
            {loginMessage}
          </div>
        )}
        <div className="text-center">
          <input
            type="submit"
            value="Login"
            onClick={loginFunc}
            className="btn btn-outline-success"
          />

          <Link to="/Register" className="btn btn-link">
            Don't Have An Account?
          </Link>
        </div>
      </form>
      <br></br>
    </div>
  );
}
