import React from "react";

import classes from "./Task.module.css";

const task = (props) => {
  const colours = ["orangered", "yellogreen", "blue", "green", "red"];
  const colourChosen = colours[Math.floor(Math.random() * 2)];
  console.log("[color: ]" + colourChosen);

  return (
    <div className={classes.Task}>
      <div
        style={{ backgroundColor: colourChosen }}
        className={classes.ColouredSide}
      ></div>
      <div className={classes.TaskContent}>
        <p>{props.taskName}</p>
        <button
          onClick={props.deleteTask}
          id={props.id}
          className={classes.DeleteBtn}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default task;
