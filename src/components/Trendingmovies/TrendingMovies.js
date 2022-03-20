import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./TrendingMovies.module.css";
import { movieActions } from "../../store/movieReducer";
import { logicActions } from "../../store/logicReducer";
import { useNavigate } from "react-router-dom";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;
  const movies = useSelector((state) => state.movieReducer.trending);

  const handleSelection = (movie) => {
    console.log(movie);
    dispatch(movieActions.setSelectedMovie(movie));
    dispatch(logicActions.setPlayer(true));
    navigate("/player");
  };

  return (
    <div className={classes.container}>
      {movies.map((movie) => (
        <div
          className={classes.card}
          key={movie.id}
          onClick={() => handleSelection(movie)}
        >
          <img
            className={classes.img1}
            src={IMG_URL + movie.poster_path}
            alt={movie.original_title}
          />
          <div className={classes.overview}>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingMovies;
