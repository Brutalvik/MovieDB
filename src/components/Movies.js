import React from "react";
import classes from "./Movies.module.css";
import Card from "../UI/Card";

const Movies = (props) => {
  return (
    <ul className={classes.card_container}>
      <Card />
    </ul>
  );
};

export default Movies;