import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background-color: ;
  }
`;

const MyJumbotron = () => {
  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <Container>
          <h1>Let's just enjoy today.</h1>
          <p>
            Anything you are willing to practice, you can do! It's very easy to
            make a sky darker, but it's a son of a gun to make it lighter. Just
            let them fall right out of your brush.
          </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
};

export default MyJumbotron;
