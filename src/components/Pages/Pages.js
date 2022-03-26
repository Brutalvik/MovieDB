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
    dispatch(logicActions.setLoading(true));
    dispatch(logicActions.increment());
    dispatch(logicActions.setLoading(false));
  };

  const handlePagePrev = () => {
    dispatch(logicActions.setLoading(true));
    dispatch(logicActions.decrement());
    dispatch(logicActions.setLoading(false));
  };

  const setPage = (page) => {
    if (page <= 0) {
      dispatch(logicActions.setLoading(true));
      dispatch(logicActions.setPage(1));
      dispatch(logicActions.setLoading(false));
    } else {
      dispatch(logicActions.setLoading(true));
      dispatch(logicActions.setPage(page));
      dispatch(logicActions.setLoading(false));
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
