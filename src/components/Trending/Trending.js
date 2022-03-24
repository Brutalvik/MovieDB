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
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Trending Movies</h1>
        </div>
      </div>

      <div>
        {loading ? (
          <div className={classes.center}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={classes.pages_header}>
              <Pages />
            </div>{" "}
            <TrendingMovies />
          </>
        )}
      </div>
    </>
  );
};

export default Trending;
