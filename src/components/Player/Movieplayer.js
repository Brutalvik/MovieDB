import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Player.module.css';
import Errorpage from '../404/Errorpage';

const Movieplayer = () => {
  const show = useSelector((state) => state.showReducer.playSelectedShow);
  const MOVIE_END_POINT = `${process.env.REACT_APP_FRAME}${show.id}`;

  window.alias_open = window.open;

  const Movie = () => {
    return (
      <iframe
        src={MOVIE_END_POINT}
        title='movie frame'
        allow='fullscreen'
        className={classes.player}
      ></iframe>
    );
  };

  return !show.id ? (
    <Errorpage />
  ) : (
    <div className={classes.player_container}>
      <Movie />
    </div>
  );
};

export default Movieplayer;
