import React, { useEffect } from "react";
import classes from "./Trending.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieReducer";
import TrendingMovies from "../Movies/TrendingMovies";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { logicActions } from "../../store/logicReducer";
import Spinner from "../../UI/Spinner/Spinner";

const Trending = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.logicReducer.page);
  const loading = useSelector((state) => state.logicReducer.loading);
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handlePageNext = () => {
    dispatch(logicActions.increment());
  };

  const handlePagePrev = () => {
    dispatch(logicActions.decrement());
  };

  const setPage = (page) => {
    if (page <= 0) {
      dispatch(logicActions.setPage(1));
    } else {
      dispatch(logicActions.setPage(page));
    }
  };

  //Fetch Movies
  useEffect(() => {
    fetch(
      `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(logicActions.setLoading(true));
        dispatch(movieActions.getTrendings(data.results));
        dispatch(logicActions.setLoading(false));
      });
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
              className={`${classes.button_element} ${
                clicked ? classes.dark : null
              }`}
              onClick={handlePagePrev}
            />
          </div>
          <div className={classes.element} onClick={() => setPage(page - 1)}>
            {page - 1}
          </div>
          <div className={classes.selected}>{page}</div>
          <div className={classes.element} onClick={() => setPage(page + 1)}>
            {page + 1}
          </div>
          <div className={classes.element}>
            <GrFormNext
              className={`${classes.button_element} ${
                clicked ? classes.dark : null
              }`}
              onClick={handlePageNext}
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div className={classes.center}>
          <Spinner />
        </div>
      ) : (
        <TrendingMovies />
      )}
    </>
  );
};

export default Trending;
