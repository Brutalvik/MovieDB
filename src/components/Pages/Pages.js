import React from "react";
import classes from "./Pages.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { logicActions } from "../../store/logicReducer";

const Pages = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);
  const page = useSelector((state) => state.logicReducer.page);

  const handlePageNext = () => {
    dispatch(logicActions.increment());
  };

  const handlePagePrev = () => {
    dispatch(logicActions.decrement());
  };

  const setPage = (page) => {
    if (page <= 0) {
      dispatch(logicActions.setPage(1));
    } else {
      dispatch(logicActions.setPage(page));
    }
  };

  return (
    <>
      <div className={classes.element}>
        <GrFormPrevious
          className={`${classes.button_element} ${
            clicked ? classes.dark : null
          }`}
          onClick={handlePagePrev}
        />
      </div>
      <div className={classes.element} onClick={() => setPage(page - 1)}>
        {page - 1}
      </div>
      <div className={classes.selected}>{page}</div>
      <div className={classes.element} onClick={() => setPage(page + 1)}>
        {page + 1}
      </div>
      <div className={classes.element}>
        <GrFormNext
          className={`${classes.button_element} ${
            clicked ? classes.dark : null
          }`}
          onClick={handlePageNext}
        />
      </div>
    </>
  );
};

export default Pages;
