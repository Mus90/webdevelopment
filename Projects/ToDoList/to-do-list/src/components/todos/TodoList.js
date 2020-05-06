import React, { Component } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  state = [{ todo: "" }];

  setInputHandler = (event) => {
    this.setState({ todo: event.target.value });
  };
  render() {
    return (
      <div className="list-wrapper">
        <NewTodoForm changed={this.setInputHandler} />
        <TodoListItem onChange={this.state.todo} />
      </div>
    );
  }
}
