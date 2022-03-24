import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Results.module.css";
import Genres from "../Genres/Genres";
import Button from "../../UI/Button/Button";
import { showActions } from "../../store/showReducer";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selected = useSelector((state) => state.showReducer.selectedShow);
  const genres = useSelector((state) => state.movieReducer.genres);
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;

  const handleSelection = (show) => {
    dispatch(showActions.setPlaySelectedShow(show));
    navigate("/player");
  };

  const displayGenres = genres.map((gen) => <li key={gen.id}>{gen.name}</li>);

  return (
    <div className={classes.container}>
      <div>
        <img
          src={`${
            selected.poster_path === null ? "" : IMG_URL + selected.poster_path
          }`}
          alt="Movie Poster"
        />
      </div>
      <div className={classes.info}>
        <h1>{selected.original_title}</h1>
        <div className={classes.left_info}>
          <h5>
            Language:{" "}
            {selected.original_language &&
              selected.original_language.toUpperCase()}
          </h5>
          <h5>Ratings: {selected.vote_average}</h5>
          <h5>
            Released:{" "}
            {(selected.release_date && selected.release_date.substr(0, 4)) ||
              (selected.first_air_date && selected.first_air_date.substr(0, 4))}
          </h5>
          <Genres genre={selected.genre_ids} />
          <ul className={classes.genres}>Genre: {displayGenres}</ul>
        </div>
        <div className={classes.overview}>
          <h4>Plot</h4>
          <p>{selected.overview}</p>
        </div>
        <div className={classes.footer}>
          <div>
            <Button text="Trailer" />
          </div>
          <div>
            <Button text="Watch" onClick={() => handleSelection(selected)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
