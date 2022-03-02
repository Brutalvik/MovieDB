import React, { useContext } from "react";
import { SharedStore } from "../store/Store";
import CardHeader from "../UI/CardHeader";
import CardBody from "../UI/CardBody";
import CardFooter from "../UI/CardFooter";
import Button from "../UI/Button";
import classes from "../UI/Card.module.css";

const imagePath = process.env.REACT_APP_IMAGE_URL;

const Searchresults = () => {
  const results = useContext(SharedStore);
  const data = results.searchdb.data;
  const pages = results.searchdb.pages;

  const handleClick = (recievedId) => {
    results.setShow((prevState) => ({
      ...prevState,
      status: true,
      id: recievedId,
    }));
  };
  return (
    <React.Fragment>
      {data.map((search) => (
        <li className={classes.card_banner}>
          <CardHeader>{search.title}</CardHeader>
          <CardBody>
            <img src={imagePath + search.poster_path} alt={search.title} />
          </CardBody>
          <CardFooter>
            {search.overview}
            <div>
              <Button
                className={classes.card_button}
                text="Trailer"
                onClick={() => handleClick(search.id)}
              />
              <Button
                className={classes.card_button}
                text="Watch"
                onClick={() => handleClick(search.id)}
              />
            </div>
          </CardFooter>
        </li>
      ))}
    </React.Fragment>
  );
};

export default Searchresults;
