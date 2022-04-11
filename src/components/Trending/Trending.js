import React from "react";
import classes from "./Trending.module.css";
import { useSelector } from "react-redux";
import TrendingMovies from "../Trendingmovies/TrendingMovies";
import Spinner from "../../UI/Spinner/Spinner";
import Pages from "../Pages/Pages";

const Trending = () => {
  const loading = useSelector((state) => state.logicReducer.loading);

  return (
    <>
      <div>
        {loading ? (
          <div className={classes.center}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={classes.pages_header}>
              <Pages />
            </div>
            <TrendingMovies />
            <div className={classes.pages_footer}>
              <Pages />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trending;
