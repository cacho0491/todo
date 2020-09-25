import React from "react";

import classes from "./Today.module.css";

const today = () => {
  const currentDay = new Date().getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth = months[new Date().getMonth()];
  console.log(currentDay);
  return (
    <div className={classes.Today}>
      <h2>{currentDay}</h2>
      <h4>{currentMonth}</h4>
    </div>
  );
};

export default today;
