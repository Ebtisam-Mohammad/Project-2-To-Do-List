import React, { useState, useEffect } from "react";
import "./App.css";
import oneImage from './1.png'

import axios from "axios";
import Todo from "./component/Todo";

export default function App() {
  const [tasks, setTasks] = useState([]);

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

  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo key={i} task={taskObj} />
  ));

  return (
    <div className="App">
      <h1 className="par1">TO DO LIST</h1>
      <div className="div1">
      <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KdxFSKrOkNaX3UkoTU9jcRztTBdq-hOK8Pr2z6_jFVPbo_TqGDQHVk4R4zpbaIUTiBM&usqp=CAU' alt='img'></img>
      </div>
      {/* when click on this button 
      should call function bring Data */}
      <button className="button" onClick={getData}>
        GET TASKS
      </button>

      {mapOverTasks}
    </div>
  );
}
