import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom"
import Todo from "./component/Todo";
import Add from "./component/Add";
import Register from "./component/Register";
import Login from "./component/Login";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/tasks`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const postNewTodo = (body) => {
    // console.log("func postNewTodo from APP");
    // {"title":"task 5","isCompleted": false}
    axios
      .post(`http://localhost:5000/tasks`, body)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        // setTasks(response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const deleteTasks = () => {
    axios
      .delete(`http://localhost:5000/tasks`)
      //     (`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const toggleTodo = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/tasks/${id}/${newStatus}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        getData();
        // change react hooks state using spread operator
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const filterData = (status) => {
    // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:5000/filter?isCompleted=${status}`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const logoutFunc = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo
      key={i}
      task={taskObj}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  ));
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <div class="container-fluid">
          <Link to="/Home" class="navbar-brand"> TO DO LIST📌</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/login" className="nav-link m-2">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" className="nav-link m-2">
                  Register
                </Link>
              </li>
            </ul>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
          <button
          type="button"
          class="btn btn btn-light"
          data-bs-toggle="popover"
          title="Todo List"
          data-bs-content="Welcome to Todo List Web Application"
        >
          {username ? "Welcome " + username : "Please Login"}{" "}
        </button></div>
        <div className="m-2">
              <button className="btn btn-outline-success btn-sm" onClick={logoutFunc}>LogOut</button>
        </div>
      </nav>

      <br />
  
      <Routes>
        <Route path="/home" element={
        <div className="text-center">
      <h1 className="par1">
      TO DO LIST📌
        <Add createFunc={postNewTodo} />
      </h1>

      {mapOverTasks}
      <button className="btn btn-light m-2" onClick={getData}>
        🐌 all
      </button>
    
      <button
        className="btn btn-light m-2"
        onClick={() => {
          filterData(true);
        }}
      >
        🐇 Done
      </button>
      <button
        className="btn btn-light m-2"
        onClick={() => {
          filterData(false);
        }}
      >
        🐢 Stil
      </button>
      <button className="btn btn-light m-2" onClick={deleteTasks}>
        x delete
      </button>
      </div>} />
      <Route
          path="/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          }
        />
      <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}