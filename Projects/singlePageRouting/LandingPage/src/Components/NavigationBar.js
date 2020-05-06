import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./Navigation.module.css";
import globalStyle from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        className={cx(
          globalStyle["fixed-nav-bar"],
          globalStyle["bg=dark"],
          globalStyle["variant=dark"],
          globalStyle["expand=lg"],
          styles.myNavigation
        )}
      >
        <div className="container">
          <Navbar.Brand href="/">ICAPE</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
