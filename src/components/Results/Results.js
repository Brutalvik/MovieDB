import React from "react";
import { useSelector } from "react-redux";
import classes from "./Results.module.css";
import Genres from "../Genres/Genres";
import Button from "../../UI/Button/Button";

const Results = () => {
  const search = useSelector((state) => state.headerReducer.searchValue);
  const results = useSelector((state) => state.headerReducer.results);
  const genres = useSelector((state) => state.headerReducer.genres);
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;

  const displayGenres = genres.map((gen) => <li key={gen.id}>{gen.name}</li>);

  const displayPoster = results.map((result) => {
    if (result.id === search) {
      return (
        <>
          <img
            key={result.id}
            src={IMG_URL + result.poster_path}
            alt="Movie Poster"
          />
        </>
      );
    }
    return null;
  });

  const displayInfo = results.map((result) => {
    if (result.id === search) {
      return (
        <div className={classes.info}>
          <h1>{result.original_title}</h1>
          <div className={classes.left_info}>
            <h5>Language: {result.original_language.toUpperCase()}</h5>
            <h5>Ratings: {result.vote_average}</h5>
            <Genres genre={result.genre_ids} />
            <ul className={classes.genres}>Genre: {displayGenres}</ul>
          </div>
          <div className={classes.overview}>
            <h4>Plot</h4>
            <p>{result.overview}</p>
          </div>
          <div className={classes.footer}>
            <div>
              <Button text="Trailer" />
            </div>
            <div>
              <Button text="Watch" />
            </div>
          </div>
        </div>
      );
    }
    return null;
  });

  return (
    <div className={classes.container}>
      <div>{displayPoster}</div>
      <div>{displayInfo}</div>
    </div>
  );
};

export default Results;
