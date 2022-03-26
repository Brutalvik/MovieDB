import React from "react";
import classes from "./Player.module.css";
import { useSelector } from "react-redux";
import Movieplayer from "./Movieplayer";
import Error from "../404/Errorpage";

const Player = () => {
  const show = useSelector((state) => state.showReducer.playSelectedShow);

  const moviePlayer = (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div>
          <h1>{show.original_title}</h1>
        </div>
      </div>
      {show.media_type === "movie" ? <Movieplayer /> : <Error />}
    </div>
  );

  return <>{moviePlayer}</>;
};

export default Player;
