import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  return (
    <input
      onChange={props.taskInput}
      className={classes.Input}
      placeholder="Ermm..."
    />
  );
};

export default input;
