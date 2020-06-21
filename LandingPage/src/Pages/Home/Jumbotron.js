import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import styles from "./Jumbotron.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default class jumbotron extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron className={cx(globalStyles["bg-info"], styles.myJumbotron)}>
          <h1>Cape Town</h1>
          <p>The Mother City</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}
