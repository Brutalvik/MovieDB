import React, { useContext } from "react";
import { SharedStore } from "../store/Store";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Button from "../UI/Button";

const Overlay = (props) => {
  const ctx = useContext(SharedStore);
  const movie_id = ctx.movieId;
  const MOVIE_URL = `https://www.2embed.ru/embed/tmdb/movie?id=${movie_id}`;

  return (
    <div className={classes.modal_backdrop}>
      <div className={classes.modal_container}>
        <iframe
          className={classes.frame}
          src={MOVIE_URL}
          title="movie"
          allow="fullscreen"
        ></iframe>
        <div className={classes.modal_body}>
          <Button
            className={classes.modal_btn}
            onClick={props.handleModalClose}
            text="Close"
          />
        </div>
      </div>
    </div>
  );
};
const Modal = (props) => {
  const ctx = useContext(SharedStore);

  const handleModalClose = () => {
    ctx.setShow({ status: false, id: 0 });
  };
  return (
    <>
      {ctx.status &&
        ReactDOM.createPortal(
          <Overlay context={ctx} handleModalClose={handleModalClose} />,
          document.getElementById("modaloverlay")
        )}
    </>
  );
};

export default Modal;
