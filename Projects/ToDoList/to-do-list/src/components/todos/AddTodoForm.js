import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTodoForm.css";

export default class AddTodoForm extends Component {
  state = {
    content: "",
  };

  // define function to change the state on every time the user change the input in the form
  // we set the id down in the form to be equal to the properties in the state for each input
  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value, // to update each input at a time
    });
  };

  //define function to accept the addNewTodoHandler as a prop, and fire the function when we click submit button
  //The addNewTodoHandler take the current state as an argument which is the new todo
  submitHandler = (event) => {
    event.preventDefault(); // to prevent automatic submit of the form when refreshing the page
    this.props.addnewTodo(this.state); //call the function addnewTodo() and pass the current state which include the new form input
    this.setState({ content: "" }); //to refresh the input and make it empty after submit
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          <Form.Group>
            <Form.Label>Adding new Todo to the list: </Form.Label>
            <Form.Control
              type="text"
              id="content"
              onChange={this.changeHandler}
              placeholder="Enter Your new Todo Here"
              value={this.state.content} //to refresh the input and make it empty after submit
            />
          </Form.Group>

          <Button float="right" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
