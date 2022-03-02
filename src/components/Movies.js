import React from "react";
import classes from "./Movies.module.css";
import Card from "./Card";

const Movies = (props) => {
  return (
    <div className={classes.movieheader}>
      <h1>Popular Movies</h1>
      <ul className={classes.card_container}>
        <Card />
      </ul>
    </div>
  );
};

export default Movies;
