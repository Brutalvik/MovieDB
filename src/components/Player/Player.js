import React from "react";
import classes from "./Player.module.css";
import { useSelector } from "react-redux";

const Player = () => {
  const movie = useSelector((state) => state.movieReducer.selectedMovie);
  const MOVIE_END_POINT = process.env.REACT_APP_MOVIE_FRAME;
  window.alias_open = window.open;
  console.log(movie);
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div>
          <h1>{movie.original_title}</h1>
        </div>
      </div>

      <div className={classes.player_container}>
        <iframe
          src={`${MOVIE_END_POINT}${movie.id}`}
          title="movie frame"
          allow="fullscreen"
          className={classes.player}
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
