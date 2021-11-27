import React from "react";

import classes from "./styles.module.css";

function Dropdown({ label, name, onChange, options }) {
  return (
    <div>
      <label>{label}</label>
      <div className={classes.selectContainer}>
        <select name={name} onChange={onChange}>
          {options?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
