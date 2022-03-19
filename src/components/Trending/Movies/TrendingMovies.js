import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./TrendingMovies.module.css";
import Card from "../../../UI/Card/Card";
import { movieActions } from "../../../store/movieReducer";
import { logicActions } from "../../../store/logicReducer";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;
  const movies = useSelector((state) => state.movieReducer.trending);

  const handleSelection = (movie) => {
    dispatch(movieActions.setSelectedMovie(movie));
    navigate("/player");
  };

  const showMore = () => {
    dispatch(logicActions.increment());
    console.log();
  };

  const showPrevious = () => {
    dispatch(logicActions.decrement());
  };
  return (
    <div className={classes.trending_container}>
      <div className={classes.subheader}>
        <h1>Trending</h1>
      </div>
      <div className={classes.more_back} onClick={showPrevious}>
        <MdArrowBackIos className={classes.arrow} />
      </div>
      <div className={classes.scrolling_wrapper}>
        {movies.map((movie) => (
          <Card key={movie.id} onClick={() => handleSelection(movie)}>
            <img
              className={classes.poster}
              src={IMG_URL + movie.poster_path}
              alt={movie.original_title}
            />
            <h2>{movie.title.trim()}</h2>
            <div className={classes.overview}>{movie.overview}</div>
          </Card>
        ))}
      </div>
      <div className={classes.more_forward} onClick={showMore}>
        <MdArrowForwardIos className={classes.arrow} />
      </div>
    </div>
  );
};

export default TrendingMovies;
