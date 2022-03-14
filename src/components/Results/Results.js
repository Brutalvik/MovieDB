import React from "react";
import { useSelector } from "react-redux";
import classes from "./Results.module.css";

const Results = () => {
  const search = useSelector((state) => state.headerReducer.searchValue);
  const results = useSelector((state) => state.headerReducer.results);
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;

  const displayResult = results.map((result) => {
    if (result.id === search) {
      return (
        <div className={classes.result}>
          {console.log(result)}
          <p>{result.original_title}</p>
          <p>{result.original_language}</p>
          <img src={IMG_URL + result.poster_path} alt="Movie Poster" />
        </div>
      );
    }
    return null;
  });

  return <div className={classes.container}>{displayResult}</div>;
};

export default Results;
