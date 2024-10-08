import React from "react";
import "./style.css";

function ToDoList(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.appSeJoAaRha.completed}
        onChange={() => props.handelClick(props.appSeJoAaRha.id)} // this is a method call
      />

      <p style={props.appSeJoAaRha.completed ? completedStyle : null}>{props.appSeJoAaRha.text}</p>

      
    </div>
  );
}

export default ToDoList;
