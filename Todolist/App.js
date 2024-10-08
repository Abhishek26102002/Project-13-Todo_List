import React, { Component } from "react";
import ToDoList from "./ToDoList";
import "./style.css";
import ToDoAPI from "./ToDoAPI";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todooo: ToDoAPI,
    };
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick(id) {
    // console.log("changed", id);
    this.setState((prevState) => {
      const updatedTodo = prevState.todooo.map((todos) => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      });
      return {
        todooo: updatedTodo,
      };
    });
  }
  render() {
    const maptodolist = this.state.todooo.map((incoming) => {
      return (
        <ToDoList
          key={incoming.id}
          appSeJoAaRha={incoming}
          handelClick={this.handelClick}
        />
      );
    });
    return <div className="todo-list">{maptodolist}</div>;
  }
}
export default App;
