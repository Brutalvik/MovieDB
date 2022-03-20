import React from "react";
import classes from "./Banner.module.css";
import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../../store/movieReducer";
import { logicActions } from "../../store/logicReducer";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const randomMovie = useSelector((state) => state.movieReducer.trending);
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;
  const backdropIMG = [];
  randomMovie.map((backdrop) => backdropIMG.push(backdrop));
  const banner = Math.floor(Math.random() * backdropIMG.length);
  const imageSource = IMG_URL + backdropIMG[banner].backdrop_path;
  console.log(imageSource);

  const handleSelection = (movie) => {
    dispatch(movieActions.setSelectedMovie(movie));
    dispatch(logicActions.setPlayer(true));
    navigate("/player");
  };

  return (
    <div className={classes.banner}>
      <div className={classes.poster}>
        <img className={classes.backdrop} src={imageSource} alt="banner" />
      </div>
      <div className={classes.content}>
        <h1>{backdropIMG[banner].title}</h1>
        <p>{backdropIMG[banner].overview}</p>
        <button
          className={classes.watch_button}
          onClick={() => handleSelection(backdropIMG[banner])}
        >
          Watch
        </button>
      </div>
    </div>
  );
};

export default Banner;
