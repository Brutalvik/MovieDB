import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Genres from "../../Genres/Genres";
import classes from "./TrendingMovies.module.css";
import Card from "../../../UI/Card/Card";

const TrendingMovies = () => {
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;
  const movies = useSelector((state) => state.headerReducer.trending);
  const genres = useSelector((state) => state.headerReducer.genres);
  const moviess = useSelector((state) =>
    console.log(state.headerReducer.trending)
  );

  return (
    <div className={classes.scrolling_wrapper}>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <img
            className={classes.poster}
            src={IMG_URL + movie.poster_path}
            alt={movie.original_title}
          />
          <h2>{movie.title.trim()}</h2>
        </Card>
      ))}
    </div>
  );
};

export default TrendingMovies;
