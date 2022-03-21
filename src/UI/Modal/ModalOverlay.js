import React from "react";
import ReactDOM from "react-dom";
import classes from "./ModalOverlay.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logicActions } from "../../store/logicReducer";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalBackdrop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch(logicActions.setModal());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeModal} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default ModalBackdrop;
