import React from 'react';
import classes from './Player.module.css';
import { useSelector } from 'react-redux';
import Movieplayer from './Movieplayer';
import Error from '../404/Errorpage';
import Button from '../../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const show = useSelector((state) => state.showReducer.playSelectedShow);

  const moviePlayer = (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div>
          <h1>{show.original_title}</h1>
        </div>
      </div>
      {show.media_type === 'movie' ? <Movieplayer /> : <Error />}
      <div className={classes.back}>
        <Button text='Back' onClick={() => navigate(-1)} />
      </div>
    </div>
  );

  return <>{moviePlayer}</>;
};

export default Player;
