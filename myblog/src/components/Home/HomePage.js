import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import MyJumbotron from "../MyJumbotron";
import styled from "styled-components";

const Styles = styled.div`
  .profile-pic {
    width: 100%;
    margin-bottom: 2em;
  }
  .person-wrapper {
    margin-bottom: 2em;
  }
`;

const HomePage = () => {
  return (
    <Styles>
      <MyJumbotron />
      <Container>
        <Row>
          <Col xs={12} lg={4} className="person-wrapper">
            <Image
              src="/assets/photo-of-man.jpg"
              rounded
              className="profile-pic"
            />
            <h5> Robert </h5>
            <p>
              The round brush is so fun, let's go back to that. It's bad when
              you have to tie a bucket on the side of your painting. You're
              gonna have one WILD day! Wiggle it, then sharpen it. Practice
              visualizing things in your mind. However you want to change this,
              that's the way it should be. It doesn't take much, but you have to
              devote that time.
            </p>
          </Col>
          <Col xs={12} lg={4} className="person-wrapper">
            <Image
              src="/assets/man-in-white.jpg"
              roundedCircle
              className="profile-pic"
            />
            <h5> Stephan</h5>
            <p>
              Always have that little roll of paint. Mountains are so simple
              that they're hard! Have to have dark in order to show light. We
              don't know exactly where this is gonna go, and we don't care at
              this point. Let's make this a little more interesting. Soft as a
              meadow. I would put water in just about everything.
            </p>
          </Col>
          <Col xs={12} lg={4} className="person-wrapper">
            <Image
              src="/assets/man-academic.jpg"
              rounded
              className="profile-pic"
            />
            <h5> Ahmed Ali</h5>
            <p>
              Once again: circular patterns. You have to make an almighty
              decision. The round brush is so fun, let's go back to that. You
              have to make these big decisions in your world. Blend color right
              here on the canvas. Truly the joy of painting is the friends that
              you make doing it. Just tap. Give it that little push.
            </p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default HomePage;
