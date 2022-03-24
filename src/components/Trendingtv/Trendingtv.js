import React from "react";
import classes from "./Trendingtv.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tvActions } from "../../store/tvReducer";
import { logicActions } from "../../store/logicReducer";
import { getPopularTv } from "../../store/tvActions";

const Tv = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IMG_URL = process.env.REACT_APP_IMAGE_URL;
  const tv = useSelector((state) => state.tvReducer.trendingTv);
  const page = useSelector((state) => state.logicReducer.page);

  const handleSelection = (movie) => {
    dispatch(tvActions.setSelectedTV(movie));
    dispatch(logicActions.setTV(true));
    navigate("/player");
  };

  React.useEffect(() => {
    dispatch(getPopularTv(page));
  }, [dispatch, page]);

  return (
    <div className={classes.container}>
      {tv.map((tv) => (
        <div
          className={classes.card}
          key={tv.id}
          onClick={() => handleSelection(tv)}
        >
          {}
          <img
            className={classes.img1}
            src={`${tv.poster_path === null ? "" : IMG_URL + tv.poster_path}`}
            alt={tv.original_title}
          />
          <div className={classes.overview}>
            <h4>{tv.title}</h4>
            <p>{tv.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tv;
