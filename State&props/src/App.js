import React, { Component } from "react";
import "./App.css";
import MyButton from "./MyButton";
import Person from "./components/Person";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

export default class App extends Component {
  state = {
    person: [
      { name: "Mustafa", age: "30" },
      { name: "Ahmed", age: "31" },
      { name: "Imam", age: "29" },
    ],
    username: "Mustafa",
  };

  switchNameHandler = () => {
    // do not do this :  this.state.person[0].name="sammani";
    this.setState({
      person: [
        { name: "Mustafa Ali", age: "30" },
        { name: "Ahmed", age: "31" },
        { name: "Imam", age: "29" },
      ],
    });
  };

  inputChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <MyButton onClick={this.switchNameHandler}>Submit</MyButton>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        ></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          and i love soccer
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        ></Person>

        <UserInput
          changed={this.inputChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}
