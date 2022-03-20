import React from "react";
import classes from "./Trending.module.css";
import { useDispatch, useSelector } from "react-redux";
import TrendingMovies from "../Trendingmovies/TrendingMovies";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { logicActions } from "../../store/logicReducer";
import Spinner from "../../UI/Spinner/Spinner";

const Trending = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.logicReducer.page);
  const loading = useSelector((state) => state.logicReducer.loading);
  const clicked = useSelector((state) => state.logicReducer.clicked);

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
