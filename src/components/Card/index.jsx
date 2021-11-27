import React from "react";

import Classes from "./styles.module.css";

function Card(props) {
  return <div className={Classes.cardContainer}>{props.children}</div>;
}

export default Card;
