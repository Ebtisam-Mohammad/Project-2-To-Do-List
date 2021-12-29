import React, { useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="Register">
    <h4 className="text"><b>WELCOM!</b></h4>
    <p className="text"><b>Join us now to manage your tasks easily with us.</b></p>
     <form>
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
        <div className="m-3 form-floating">
          <input
            type="username"
            className="form-control"
            id="floatingUsername"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="register"
            onClick={registerFunc}
            className="btn btn-outline-success"
          />

          <Link to="/Register" className="btn btn-link">
          You already have an account?
          </Link>
        </div>
      </form>
      <br></br>
    </div>
  );
}
      {/* <form action="">
        <label htmlFor="email">Email:</label>
        <input className="input2"
          type="email"
          // placeholder="Write email here ..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input className="input2"
          type="password"
          // placeholder="Write password here ..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <input className="input2"
          type="text"
          // placeholder="Write username here ..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <br />
        <Link to="/register">You already have an account?</Link><br />
        <input className="button2" type="submit" value="Register" onClick={registerFunc} />
        
      </form> */}
