import React from "react";
import { Button } from "reactstrap";

const newButton = (props) => {
  return (
    <div>
      <Button onClick={props.onClick} color="primary">
        Switch Name
      </Button>
    </div>
  );
};

export default newButton;
