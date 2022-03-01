import React, { useContext } from "react";
import { SharedStore } from "../store/Store";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Button from "../UI/Button";

const Overlay = (props) => {
  const id = 71728;
  const ep = 4;
  return (
    <div className={classes.modal_backdrop}>
      <div className={classes.modal_container}>
        <iframe
          className={classes.frame}
          src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=${ep}`}
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
    ctx.handleModal(false);
  };
  return (
    <>
      {ctx.status.modal &&
        ReactDOM.createPortal(
          <Overlay context={ctx} handleModalClose={handleModalClose} />,
          document.getElementById("modaloverlay")
        )}
    </>
  );
};

export default Modal;
