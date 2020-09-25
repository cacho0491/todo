import React from "react";

import classes from "./Header.module.css";
import Today from "./Today/Today";

const header = (props) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDayName = weekDays[new Date().getDay() - 1];

  console.log("[Day]" + currentDayName);
  return (
    <header className={classes.Header}>
      <Today />
      <h1>Todo</h1>
      <p>{currentDayName}</p>
    </header>
  );
};

export default header;

/*
  POSSIBLE FUTURE ADDITION
  const weekDaysEmojis = ["😭", "😢", "😰", "😅", "😁", "😆", "🥺"];
  const currentDayEmoji = weekDaysEmojis[currentDayName + 1];
  */
