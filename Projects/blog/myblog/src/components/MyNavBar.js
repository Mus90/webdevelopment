import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import styled from "styled-components";
import "../App.css";

const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="navbar">
      <div className="container">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/News">News</Nav.Link>
          <Nav.Link href="/Contacts">Contact us</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default MyNavBar;
