import React from "react";

import classes from "./styles.module.css";

function RowContainer(props) {
  return (
    <div className={classes.rowContainer} style={{ ...props.styles }}>
      {props.children}
    </div>
  );
}

export default RowContainer;
