import React, { Component } from "react";
import MyImages from "./MyImages";
import MyJumbotron from "./MyJumbotron";

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyJumbotron />
        <MyImages />
      </div>
    );
  }
}
