import React, { Component } from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styles from "./Home.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import MyImages from "./MyImages";

export default class Home extends Component {
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Container>
          <Jumbotron className={cx(globalStyles.fluid, styles.myJumbotron)}>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Jumbotron>
        </Container>
        <MyImages />
      </div>
    );
  }
}
