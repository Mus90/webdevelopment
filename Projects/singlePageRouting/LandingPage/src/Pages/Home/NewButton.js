import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "./Button.module.css";
import globalStyles from "../../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

export default class newButton extends Component {
  render() {
    return (
      <div>
        <Button
          className={cx(globalStyles["variant=primary"], styles.myButton)}
        >
          Primary
        </Button>
      </div>
    );
  }
}
