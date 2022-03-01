import React, { useContext } from "react";
import classes from "./Card.module.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { SharedStore } from "../store/Store";
import CardFooter from "./CardFooter";
import Button from "./Button";

const Card = (props) => {
  const ctx = useContext(SharedStore);
  const imagePath = process.env.REACT_APP_IMAGE_URL;
  return (
    <>
      {ctx.moviedb.data.map((movie) => (
        <li className={classes.card} key={movie.id}>
          <CardHeader>
            <h4>{movie.title}</h4>
            <div></div>
            <h4>{movie.original_language.toUpperCase()}</h4>
          </CardHeader>
          <CardBody>
            <img src={imagePath + movie.poster_path} alt="poster" />
          </CardBody>
          <CardFooter>
            {movie.overview}
            <div>
              <Button className={classes.card_button} text="Trailer" />
              <Button className={classes.card_button} text="Watch" />
            </div>
          </CardFooter>
        </li>
      ))}
    </>
  );
};

export default Card;
