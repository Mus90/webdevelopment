import React, { Component } from "react";
//import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { ListGroup } from "react-bootstrap";

export default class TodoList extends Component {
  state = {
    todo: "",
    todos: [
      {
        text: "wake up",
        done: false,
      },
    ],
  };

  setInputHandler = (event) => {
    this.setState({ todo: event.target.value });
  };
  render() {
    return (
      <div className="list-wrapper">
        <NewTodoForm changed={this.setInputHandler} />

        <ListGroup>
          <ListGroup.Item>{this.state.todos[0].text} </ListGroup.Item>
          <ListGroup.Item>{this.state.todo} </ListGroup.Item>
          <ListGroup.Item />
          <ListGroup.Item />
        </ListGroup>
      </div>
    );
  }
}
