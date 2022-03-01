import React from "react";
import classes from "./Card.module.css";

const CardHeader = (props) => {
  return <div className={classes.card_header}>{props.children}</div>;
};

export default CardHeader;
