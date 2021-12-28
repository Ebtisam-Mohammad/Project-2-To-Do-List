import React, { useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom"

export default function Login(props) {
  const [email, setEmail] = useState("m.jouza3@gmail.com");
  const [password, setPassword] = useState("1234");

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
        console.log("DATA: ", response.data);
        props.setIsLoggedIn(true);
        props.setUsername(response.data.username);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="Login">
      {/* <form action="">
        <label htmlFor="">Email:</label>
        <input className="input2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
          placeholder="Write email here ..."
        />
        <br />
        <label htmlFor="">Password:</label>
        <input className="input2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="Write password here ..."
        />
        <br />
        <Link to="/register">Don't have an account?</Link> <br />
        <input className="button2"type="submit" value="Login" onClick={loginFunc} />
        
      </form> */}
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
