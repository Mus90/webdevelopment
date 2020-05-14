import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ContactsPage from "./components/Contacts/ContactsPage";
import NewsPage from "./components/News/NewsPage";
import NoMatchPage from "./components/NoMatch/NoMatchPage";
import MyNavBar from "./components/MyNavBar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MyNavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/News" component={NewsPage} />
            <Route path="/Contacts" component={ContactsPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
