import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import MyNavbar from "./Components/MyNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Home />
      </div>
    );
  }
}

export default App;
