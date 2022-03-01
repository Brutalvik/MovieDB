import React, { useContext } from "react";
import { SharedStore } from "../store/Store";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.modal_backdrop}>
      <div className={classes.modal_container}>
        <div className={classes.modal_body}>
          <button onClick={props.handleModalClose}>Close</button>
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
