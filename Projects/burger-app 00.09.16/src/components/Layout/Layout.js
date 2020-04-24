import React from "react";
import Aux from "../../hoc/Aux";

const layout = (props) => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop </div>
    <p> This is my rendered text inside the Auxilary function </p>
    <main>{props.children}</main>
  </Aux>
);
export default layout;
