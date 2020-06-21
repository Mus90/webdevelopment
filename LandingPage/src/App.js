import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import NoMatchPage from "./Pages/NoMatchPage";
import NavigationBar from "./Components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Contact" component={ContactPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
