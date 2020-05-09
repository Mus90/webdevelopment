import React, { Component } from "react";
import Table from "./components/todos/Table";
import AddTodoForm from "./components/todos/AddTodoForm";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy food" },
      { id: 2, content: "Play soccer" },
    ],
  };

  //define a function to add todo to the state and pass it to the Form as a method props
  addNewTodoHandler = (newTodo) => {
    newTodo.id = Math.random();
    let newtodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newtodos,
    });
  };

  // define function takes id as an argument to delete todo from the state using filter function
  deleteTodoHandler = (id) => {
    let newtodos = this.state.todos.filter((eachTodo) => {
      return eachTodo.id !== id;
    });
    this.setState({
      todos: newtodos,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Simple Todo List Application </h1>
        <Table todos={this.state.todos} deleteTodo={this.deleteTodoHandler} />
        <AddTodoForm addnewTodo={this.addNewTodoHandler} />
      </div>
    );
  }
}
