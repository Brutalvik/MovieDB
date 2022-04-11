import React from "react";
import classes from "./Movies.module.css";
import Trending from "../Trending/Trending";
import { useSelector } from "react-redux";
const Movies = () => {
  const error = useSelector((state) => state.movieReducer.error);

  const ErrorMessage = (
    <div>
      <h1>Error</h1>
      <h2>{error.message}</h2>
    </div>
  );
  return (
    <div className={classes.container}>
      {!error.status ? <Trending /> : <ErrorMessage />}
    </div>
  );
};

export default Movies;
