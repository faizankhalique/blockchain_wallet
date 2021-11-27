import React from "react";

import classes from "./styles.module.css";

function TextInput({ label, value, type, name, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <div className={classes.container}>
        <input type={type} value={value} name={name} onChange={onChange} />
        {value && (
          <label style={{ fontSize: 12, color: "black", marginTop: 3 }}>
            BOA
          </label>
        )}
      </div>
    </div>
  );
}

export default TextInput;
