import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Img from "../../Components/Img";
import NewButton from "./NewButton";

export default class homePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <NewButton />
        <Img />
      </React.Fragment>
    );
  }
}
