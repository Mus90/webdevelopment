import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./MyNavbar.module.css";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className={cx(
            globalStyles["bg = dark"],
            globalStyles["navbar-fixed-top"],
            globalStyles["variant = dark"],
            styles.myNavbar
          )}
        >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
