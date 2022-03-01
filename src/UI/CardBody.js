import React from "react";
import classes from "./Card.module.css";

const CardBody = (props) => {
  return <div className={classes.card_body}>{props.children}</div>;
};

export default CardBody;
