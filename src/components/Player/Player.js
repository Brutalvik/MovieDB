import React from "react";
import classes from "./Player.module.css";
import { useSelector } from "react-redux";

const Player = () => {
  const show = useSelector((state) => state.showReducer.playSelectedShow);
  const player = useSelector((state) => console.log(state.logicReducer.movie));

  const MOVIE_END_POINT = process.env.REACT_APP_MOVIE_FRAME + show.id;
  window.alias_open = window.open;

  const moviePlayer = (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div>
          <h1>{show.original_title}</h1>
        </div>
      </div>
      <div className={classes.player_container}>
        {show.media_type === "movie" ? (
          <iframe
            src={`${MOVIE_END_POINT}`}
            title="movie frame"
            allow="fullscreen"
            className={classes.player}
          ></iframe>
        ) : (
          <h1>Under Construction</h1>
        )}
      </div>
    </div>
  );

  return <>{!player ? moviePlayer : null}</>;
};

export default Player;
