import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styles from "./MyJumbotron.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default class MyJumbotron extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron className={cx(globalStyles.fluid, styles.myJumbotron)}>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
