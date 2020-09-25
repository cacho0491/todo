import React from "react";

import Header from "./Header/Header";

const layout = (props) => {
  return <Header>{props.children}</Header>;
};

export default layout;
