import React from "react";
import { useSelector } from "react-redux";
import classes from "./Player.module.css";

const Movieplayer = () => {
  const show = useSelector((state) => state.showReducer.playSelectedShow);
  const MOVIE_END_POINT = `${process.env.REACT_APP_FRAME}movie?id=${show.id}`;
  window.alias_open = window.open;
  return (
    <div className={classes.player_container}>
      <iframe
        src={MOVIE_END_POINT}
        title="movie frame"
        allow="fullscreen"
        className={classes.player}
      ></iframe>
    </div>
  );
};

export default Movieplayer;
