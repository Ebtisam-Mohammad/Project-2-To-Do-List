import React, { useState } from "react";

export default function Add(props) {
  const [newTitle, setNewTitle] = useState("");

  const createNewTodo = () => {
    //
    console.log("createNewTodo from ADD");
    // {"title":"task 5","isCompleted": false}
    props.createFunc({title: newTitle, isCompleted:false});
  };

  return (
    <div className="input-group input-group-sm m-">
      <input className="input-group-text"
        type="text"
        placeholder=""
        class="form-control" aria-label="Sizing example input" 
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button className="btn btn-success" onClick={createNewTodo}>&#9998;</button>
    </div>
  );
}

{/* <div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div> */}