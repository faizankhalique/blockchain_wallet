import React from "react";

import classes from "./styles.module.css";

function Button({ title, onClick, disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classes.button}
    >
      {title}
    </button>
  );
}

export default Button;
