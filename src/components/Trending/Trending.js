import React, { useEffect } from "react";
import classes from "./Trending.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieReducer";
import TrendingMovies from "../Movies/TrendingMovies";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { logicActions } from "../../store/logicReducer";

const Trending = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.logicReducer.page);
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handlePageNext = () => {
    dispatch(logicActions.increment());
  };

  const handlePagePrev = () => {
    dispatch(logicActions.decrement());
  };

  //Fetch Movies
  useEffect(() => {
    fetch(
      `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(movieActions.getTrendings(data.results)));
  }, [BASE_URL, API_KEY, dispatch, page]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Movies</h1>
        </div>
        <div className={classes.pages_header}>
          <div className={classes.element}>
            <GrFormPrevious
              className={classes.button_element}
              onClick={handlePagePrev}
            />
          </div>
          <div className={classes.element}>{page - 1}</div>
          <div className={classes.selected}>{page}</div>
          <div className={classes.element}>{page + 1}</div>
          <div className={classes.element}>
            <GrFormNext
              className={classes.button_element}
              onClick={handlePageNext}
            />
          </div>
        </div>
      </div>
      <TrendingMovies />
    </>
  );
};

export default Trending;
