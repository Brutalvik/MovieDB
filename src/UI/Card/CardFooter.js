import React from "react";
import classes from "./Card.module.css";
const CardFooter = (props) => {
  return <div className={classes.overview}>{props.children}</div>;
};

export default CardFooter;
