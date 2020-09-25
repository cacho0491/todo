import React from "react";

import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop
        modalOpen={props.modalOpen}
        backdropClicked={props.backdropClicked}
      />
      <div className={classes.Modal}>{props.children}</div>;
    </React.Fragment>
  );
};

export default modal;
