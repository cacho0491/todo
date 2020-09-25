import React from "react";

import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button onClick={props.btnClicked} className={classes.Button}>
      {props.btnName}
    </button>
  );
};

export default button;
