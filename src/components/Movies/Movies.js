import React from "react";
import classes from "./Movies.module.css";
import Trending from "../Trending/Trending";
const Movies = () => {
  return (
    <div className={classes.container}>
      <Trending />
    </div>
  );
};

export default Movies;
