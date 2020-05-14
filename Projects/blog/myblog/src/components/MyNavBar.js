import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: red;
  }
`;

const MyNavBar = () => {
  return (
    <Styles>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/News">News</Nav.Link>
          <Nav.Link href="/Contacts">Contact us</Nav.Link>
        </Nav>
      </Navbar>
    </Styles>
  );
};

export default MyNavBar;
