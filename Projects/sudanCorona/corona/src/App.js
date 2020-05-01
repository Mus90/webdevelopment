import React, { Component } from "react";
import "./App.css";
import MyButton from "./MyButton";

export default class App extends Component {
  render() {
    return (
      <div>
        <MyButton>Submit</MyButton>
      </div>
    );
  }
}
