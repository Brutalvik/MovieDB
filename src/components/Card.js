import React, { useContext, useState } from "react";
import classes from "../UI/Card.module.css";
import CardHeader from "../UI/CardHeader";
import CardBody from "../UI/CardBody";
import { SharedStore } from "../store/Store";
import CardFooter from "../UI/CardFooter";
import Button from "../UI/Button";

const Card = (props) => {
  const ctx = useContext(SharedStore);
  const imagePath = process.env.REACT_APP_IMAGE_URL;

  const handleTrailerClick = () => {
    ctx.handleModal(true);
  };

  return (
    <>
      {ctx.moviedb.data.map((movie) => (
        <li className={classes.card} key={movie.id}>
          <CardHeader>
            <h4>{movie.title}</h4>
            <div>
              <p>{movie.original_language.toUpperCase()}</p>
            </div>
          </CardHeader>
          <CardBody>
            <img src={imagePath + movie.poster_path} alt="poster" />
          </CardBody>
          <CardFooter>
            {movie.overview}
            <div>
              <Button
                className={classes.card_button}
                text="Trailer"
                onClick={handleTrailerClick}
              />
              <Button className={classes.card_button} text="Watch" />
            </div>
          </CardFooter>
        </li>
      ))}
    </>
  );
};

export default Card;
