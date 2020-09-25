import React from "react";

import Task from "./Task/Task";
import classes from "./Tasks.module.css";

const tasks = (props) => {
  const tasksToRender = props.tasks.map((task) => (
    <Task id={task.id} taskName={task.value} deleteTask={props.deleteTask} />
  ));

  return <div className={classes.Tasks}>{tasksToRender}</div>;
};

export default tasks;
